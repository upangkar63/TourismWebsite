if(process.env.NODE_ENV !=  "production") {
    require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Package = require("./models/travelTour.js");
const interPackage = require("./models/internationalPack.js");
const GearBooking = require("./models/gearBooking.js");
const Image = require("./models/image.js");
const path = require("path");
const methodOverride = require("method-override")
const ejsMate = require("ejs-mate"); //helps in creating templates layout boilerplate
const User = require("./models/user.js");
const Gear = require("./models/gears.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const ExpressError = require("./utils/ExpressError.js");


const packagesRouter = require("./routes/packages.js");
const reviewsRouter = require("./routes/review.js");
const interReviewRouter = require("./routes/interReview.js");
const userRouter = require("./routes/user.js");
const interpackRouter = require("./routes/interpack.js");
const wrapAsync = require("./utils/wrapAsync.js");
const { isLoggedIn } = require("./middleware.js");
const { booking } = require("./controllers/packages.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/travelTour";

main().then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));  // for parsing data like id etc
app.use(methodOverride("_method"))
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));


const sessionOptions = {
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
    },
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Flash message middleware
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");

    res.locals.currUser = req.user;
    next();
})
// root
// app.get("/", (req, res) => {
//     res.send("This is the root");
// });

// Search route
app.get("/search", async(req, res) => {
    // console.log(req.query);
    const query = req.query.query;
    
    if (!query) {
        return res.status(400).json({ error: "No search query provided" });
      }
      console.log(query);
      
    try {
        const results = await Package.find({
            $or:[
                {country: {$regex: query, $options: 'i'}},
                {location: {$regex: query, $options: 'i'}},
                {title: {$regex: query, $options: 'i'}},
            ]
        });
        const results2 = await interPackage.find({
            $or:[
                {country: {$regex: query, $options: 'i'}},
                {location: {$regex: query, $options: 'i'}},
                {title: {$regex: query, $options: 'i'}},
            ]
        });

        const combinedResults = [...results, ...results2];

        res.json(combinedResults);
    } catch (err) {
        res.status(500).json({err: "Error in fetching search requests"});
    }
});

// Home route
app.get("/home", wrapAsync( async(req, res) => {
        const images = await Image.findOne();
        const allPackages = await Package.find({}).sort({date: -1}).limit(6);
        const interPacks = await interPackage.find({}).sort({date: -1}).limit(6);
        res.render("packages/home.ejs", {allPackages, interPacks, images: images.imagePath} );
    }));

    // Deals route
app.get("/deals",wrapAsync( async(req, res) => {
    const allPackages = await Package.find({price:{$lt: 7000}}).sort({date: -1}).limit(3);
    const interPacks = await interPackage.find({price:{$lt: 20000}}).sort({date: -1}).limit(3);
    res.render("packages/deal.ejs", {allPackages, interPacks});
}));


// travel gears route
app.get ("/travel-gears", async(req, res ) => {
    const gears = await Gear.find({});
    res.render("navbar/gear.ejs", {gears});
});

// travel gear show route
app.get("/travel-gears/:id", async (req, res) => {
    const { id } = req.params;
    const gear = await Gear.findById(id);

    res.render("gears/show.ejs", { gear });
});

// travel gears buy route

app.get("/travel-gears/:id/buy", isLoggedIn, async (req, res) => {
    const { id } = req.params;
    const gear = await Gear.findById(id);

    res.render("gears/buyGear.ejs", { gear });
});

// travel gears post 

app.post("/travel-gears/:id/buy", wrapAsync( async (req, res) => {
    const gearId = req.params.id;
    const userId = req.user._id;

    const gear = await Gear.findById(gearId);
    
    const {name, email, phoneno, state, city, countryCode, pincode} = req.body;

    const fullPhoneNumber = countryCode + phoneno;
    const gearBooking = new GearBooking ({
        userId,
        gearId,
        name,
        email,
        phoneno: fullPhoneNumber,
        state,
        city,
        pincode
    });

    await gearBooking.save();

    req.flash("success", "Your order has been placed successfully!");
    res.redirect(`/travel-gears/${gearId}/bookings/${gearBooking._id}/confirm`);
}));
// gears booking confirmation
app.get("/travel-gears/:id/bookings/:gearBookingId/confirm", async(req, res) => {
    try {
        const { gearId, gearBookingId } = req.params;
        
        const booking = await GearBooking.findById(gearBookingId).populate("gearId").populate("userId");
        if (!booking) {
            req.flash("error", "Booking not found");
            return res.redirect("/travel-gears");
        }

        res.render('gears/confirmBuy.ejs', { booking });
    } catch (error) {
        console.error(error);
        req.flash("error", "Error displaying booking confirmation.");
        res.redirect("/packages/domestic");
    }
})
// Contact us route
app.get("/contact-us", async(req, res) => {
    res.render("footer/contact.ejs");
});

// Travel guide
app.get ("/guide/city", (req, res) => {
    res.render("navbar/cityguide.ejs");
    
});

app.get ("/guide/cultural", (req, res) => {
    res.render("navbar/cultural.ejs");
})
app.get ("/guide/local", (req, res) => {
    res.render("navbar/local.ejs");
})

// privacy,cancellation, refund policy

app.get("/privacy-policy", (req, res) => {
    res.render("footer/privacy.ejs");
})
app.get("/cancellation-policy", (req, res) => {
    res.render("footer/cancellation.ejs");
})
app.get("/refund-policy", (req, res) => {
    res.render("footer/refund.ejs");
})

// all packages domestic+international
app.get("/packages", wrapAsync(async(req, res) =>{
    const domPackages = await Package.find({});
    const intPackages = await interPackage.find({});
    res.render("home/index.ejs", {domPackages, intPackages});
}));

app.use("/packages/domestic", packagesRouter);
app.use("/packages/international", interpackRouter);
app.use("/packages/domestic/:id/reviews", reviewsRouter);
app.use("/packages/international/:id/reviews", interReviewRouter);
app.use("/", userRouter);




app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page not found!"));
});

// error middleware
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong!" } = err;
    res.status(statusCode).render("error.ejs", { message });
})


let PORT =  8080;

app.listen(PORT, () => {
    console.log(`The server is listening in port ${PORT}...`);
});