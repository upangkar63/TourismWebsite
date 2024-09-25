if(process.env.NODE_ENV !=  "production") {
    require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Package = require("./models/travelTour.js");
const interPackage = require("./models/internationalPack.js");
const Image = require("./models/image.js");
const path = require("path");
const methodOverride = require("method-override")
const ejsMate = require("ejs-mate"); //helps in creating templates layout boilerplate
const User = require("./models/user.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const ExpressError = require("./utils/ExpressError.js");


const packagesRouter = require("./routes/packages.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const interpackRouter = require("./routes/interpack.js");
const wrapAsync = require("./utils/wrapAsync.js");

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
app.get("/home",wrapAsync( async(req, res) => {
        const allPackages = await Package.find({}).sort({date: -1}).limit(6);
        const interPacks = await interPackage.find({}).sort({date: -1}).limit(6);
        res.render("packages/home.ejs", {allPackages, interPacks});
    }));

    // Deals route
app.get("/deals",wrapAsync( async(req, res) => {
    const allPackages = await Package.find({price:{$lt: 7000}}).sort({date: -1}).limit(3);
    const interPacks = await interPackage.find({price:{$lt: 20000}}).sort({date: -1}).limit(3);
    res.render("packages/deal.ejs", {allPackages, interPacks});
}));

// gallery
app.get("/gallery",wrapAsync( async(req, res) => {
        const images = await Image.findOne();
        res.render("packages/gallery.ejs", { images: images.imagePath});
}));
// Explore route
app.get("/explore", async(req, res) =>{
    res.render("home/explore.ejs");
});
// Contact us route
app.get("/contact-us", async(req, res) => {
    res.render("footer/contact.ejs");
});


// all packages domestic+international
app.get("/packages", wrapAsync(async(req, res) =>{
    const domPackages = await Package.find({});
    const intPackages = await interPackage.find({});
    res.render("home/index.ejs", {domPackages, intPackages});
}))

app.use("/packages/domestic", packagesRouter);
app.use("/packages/:id/reviews", reviewsRouter);
app.use("/", userRouter);
app.use("/packages/international", interpackRouter);



app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page not found!"));
});

// error middleware
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong!" } = err;
    res.status(statusCode).render("error.ejs", { message });
})

app.listen(3000, () => {
    console.log("The server is listening in port 3000...");
});