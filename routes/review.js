const express = require("express");
const router = express.Router({mergeParams: true});
const Package = require("../models/travelTour.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema} = require("../schema.js");
const Review = require("../models/review.js");
const {isLoggedIn} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

const validateReview = (req, res, next) => {
    let {error} = reviewSchema.validate(req.body);
    if(error) {
        let errMsge = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsge);
    } else {
        next();
    }
}

// submitting new review
router.post("/",
    isLoggedIn, 
    validateReview, wrapAsync( 
    reviewController.createReview
));

// Delete review route
router.delete("/:reviewId", wrapAsync(reviewController.deleteReview)
);

module.exports = router;