const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");
const wrapAsync = require("../utils/wrapAsync.js");

const {saveRedirectUrl, isLoggedIn} = require("../middleware.js");
const { route } = require("./packages.js");

const usersControllers = require("../controllers/users.js");

// Signup render
router.get("/signup", usersControllers.signupRenderForm);

// post req to signup
router.post("/signup",
    wrapAsync( usersControllers.signUpPost));

// Render login
router.get("/login", usersControllers.loginFormRender);

//post to login route 
router.post("/login", saveRedirectUrl, passport.authenticate("local", {failureRedirect: "/login", failureFlash: true}),
usersControllers.loginPost
);

// Show Bookings route
router.get("/my-bookings", usersControllers.bookings);

//bookingpackage Details
router.get ("/my-bookings/details/:bookingId",isLoggedIn, usersControllers.viewBookingDetails);

router.delete("/my-bookings/details/:bookingId", isLoggedIn, wrapAsync(usersControllers.deletebooking));

router.get("/my-bookings/gears", isLoggedIn, usersControllers.gearsBookings);

router.get("/my-bookings/gears/details/:bookingId", isLoggedIn,usersControllers.viewGearBookingDetails);

router.delete("/my-bookings/gears/details/:bookingId",isLoggedIn, wrapAsync(usersControllers.deleteGearOrder));

// logout
router.get("/logout", usersControllers.logOutUser);

module.exports = router;
