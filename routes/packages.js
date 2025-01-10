const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const {packageSchema} = require("../schema.js");
const {isLoggedIn} = require("../middleware.js");
const Booking = require("../models/booking.js");

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
router.get("/:id/book", isLoggedIn,  packageController.book);

router.post("/:id/book", isLoggedIn, packageController.booking);

router.get("/:id/bookings/:bookingId/confirm", packageController.confirmbook);
// About
router.get("/about", packageController.about);

// Show route
router.get("/:id",
    wrapAsync( packageController.showDomestic));


module.exports = router;