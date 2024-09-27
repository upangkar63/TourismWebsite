const User = require("../models/user.js");

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
module.exports.bookings = (req, res) => {
    res.render("users/booking.ejs");
}

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