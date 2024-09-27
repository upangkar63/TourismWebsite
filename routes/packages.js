const express = require("express");
const router = express.Router();
// const Package = require("../models/travelTour.js");
// const interPackage = require("../models/internationalPack.js");
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const {packageSchema} = require("../schema.js");
const {isLoggedIn} = require("../middleware.js");

const packageController = require("../controllers/packages.js");

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
    wrapAsync(packageController.index ));

// Book page
router.get("/:id/book", isLoggedIn, packageController.book);


// About
router.get("/about", packageController.about);

// Show route
router.get("/:id",
    wrapAsync( packageController.showDomestic));


module.exports = router;