const User = require("../models/user.js");
const Package = require("../models/travelTour.js");
const Booking = require("../models/booking.js");
const gearBooking = require("../models/gearBooking.js");

module.exports.signupRenderForm = (req, res) => {
    res.render("users/signup.ejs", {showFooter: false});
}

// signup post 
module.exports.signUpPost =  async(req, res) => {
    try{
        let {username, email,  password} = req.body;
        const newUser = new User({email, username});
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, ((err) => { // autot login after signup
            if(err) {
                return next(err);
            }
            req.flash("success", "Welcome to Wanderer!");
            res.redirect("/packages");
            // res.redirect("/listings" + req.user.username);
        }));
    } catch(err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }

}

//login render
module.exports.loginFormRender = (req, res) => {
    res.render("users/login.ejs", {showFooter: false});
}

// login post
module.exports.loginPost =  async(req, res) => {
    req.flash("success", "Welcome back to wanderer!");
    let redirectUrl = res.locals.redirectUrl || "/packages";
    res.redirect(redirectUrl);
}

// user's bookings
module.exports.bookings = async(req, res) => {
    if(!req.user) {
        req.flash("error", " You must login to your account to see bookings! ")
    }
    try {
        
        const bookings = await Booking.find({ userId: req.user._id }).populate('packageId'); // Adjust to match your schema
        res.render("users/booking.ejs", { bookings });
    } catch (err) {
        console.error(err);
        req.flash("error", " Error fetching your bookings ");
        res.status(500).redirect("/packages/domestic"); 
    }
}


// user booking details
module.exports.viewBookingDetails = async (req, res) => {
    const { bookingId } = req.params; 

    try {
      
        const booking = await Booking.findById(bookingId)
            .populate('packageId')
            .populate('userId', 'name email phoneno state city'); 
        if (!booking) {
            req.flash("error", "Booking not found.");
            return res.redirect("/my-bookings"); 
        }

        res.render("users/bookingDetails.ejs", { booking });

    } catch (err) {
        console.error(err);
        req.flash("error", "Error fetching your booking details.");
        res.status(500).redirect("/packages/domestic");
    }
};

// delete bookings
module.exports.deletebooking = async(req, res) => {
    let { bookingId } = req.params;
    // console.log(req.parmas.id);
    let deleted = await Booking.findByIdAndDelete(bookingId);
    console.log(deleted);
    req.flash("success", "Your booking has been canceled!");
    res.redirect("/my-bookings");
}

// user gear bookings
module.exports.gearsBookings = async(req, res) => {
    if(!req.user) {
        req.flash("error", " You must login to your account to see bookings! ")
    }
    try {
        
        const bookings = await gearBooking.find({ userId: req.user._id }).populate('gearId'); // Adjust to match your schema
        res.render("users/gearBooking.ejs", { bookings });
    } catch (err) {
        console.error(err);
        req.flash("error", " Error fetching your bookings ");
        res.status(500).redirect("/travel-gears"); 
    }
}


// user booking details
module.exports.viewGearBookingDetails = async (req, res) => {
    const { bookingId } = req.params; 

    try {
      
        const booking = await gearBooking.findById(bookingId)
            .populate('gearId')
            .populate('userId', 'name email phoneno state city'); 
        if (!booking) {
            req.flash("error", "Booking not found.");
            return res.redirect("/my-bookings"); 
        }

        res.render("users/bookingDetailsGear.ejs", { booking });

    } catch (err) {
        console.error(err);
        req.flash("error", "Error fetching your booking details.");
        res.status(500).redirect("/travel-gears");
    }
};

// delete gear's order
module.exports.deleteGearOrder = async(req, res) => {
    let { bookingId } = req.params;
    // console.log(req.parmas._id);
    let deleted = await gearBooking.findByIdAndDelete(bookingId);
    console.log(deleted);
    req.flash("success", "Your order has been canceled!");
    res.redirect("/my-bookings/gears");
};

// Logout
module.exports.logOutUser = (req, res, next) => {
    req.logout((err) => {
        if(err) {
            return next(err);
        }
        req.flash("success", "You are logged out of your account.");
        res.redirect("/home");
    })
}