const express = require("express");
const router = express.Router();
const Package = require("../models/travelTour.js");
// const interPackage = require("../models/internationalPack.js");
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const {packageSchema} = require("../schema.js");
const {isLoggedIn} = require("../middleware.js");


// validation schema middleware
const validatePackage = (req, res, next) => {
    let {error} = packageSchema.validate(req.body);
    if(error) {
        let errMsge = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsge);
    } else {
        next();
    }
}

// Index route
router.get("/",
    wrapAsync(
     async (req, res) => {
    const allPackages = await Package.find({});
    res.render("packages/index.ejs", {allPackages});
}));

// Book page
router.get("/:id/book", isLoggedIn, (req, res) => {
    res.render("packages/book.ejs");
});


// About
router.get("/about", (req, res) => {
    res.render("packages/about.ejs");
    // res.send("about");
});

// Show route
router.get("/:id",
    wrapAsync( 
    async (req, res) => {
    let {id} = req.params;
    const pack = await Package.findById(id).populate("reviews");
    if(!pack) {
        req.flash("error", "Package not found!");
        return res.redirect("/packages");
    }
    res.render("packages/show.ejs", {pack});

}));


module.exports = router;