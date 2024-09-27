const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");
const wrapAsync = require("../utils/wrapAsync.js");

const {saveRedirectUrl} = require("../middleware.js");
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

// logout
router.get("/logout", usersControllers.logOutUser);

module.exports = router;
