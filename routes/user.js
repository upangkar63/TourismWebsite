const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");
const wrapAsync = require("../utils/wrapAsync.js");

const {saveRedirectUrl} = require("../middleware.js");
const { route } = require("./packages.js");

// Signup render
router.get("/signup", (req, res) => {
    res.render("users/signup.ejs", {showFooter: false});
});

// post req to signup
router.post("/signup",
    wrapAsync( 
    async(req, res) => {
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
   
}));
// Render login
router.get("/login", (req, res) => {
    res.render("users/login.ejs", {showFooter: false});
});

//post to login route 
router.post("/login", saveRedirectUrl, passport.authenticate("local", {failureRedirect: "/login", failureFlash: true}),
 async(req, res) => {
    req.flash("success", "Welcome back to wanderer!");
    let redirectUrl = res.locals.redirectUrl || "/packages";
    res.redirect(redirectUrl);
});

// Show Bookings route
router.get("/my-bookings", (req, res) => {
    res.render("users/booking.ejs");
})

// logout
router.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if(err) {
            return next(err);
        }
        req.flash("success", "You are logged out of your account.");
        res.redirect("/home");
    })
})

module.exports = router;
