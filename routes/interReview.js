const express = require('express');
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {reviewSchema} = require("../schema.js");
const Review = require("../models/review.js");
const InterPack = require("../models/internationalPack.js");
const {isLoggedIn, isReviewAuthor} = require("../middleware.js");

const interReviewController = require("../controllers/interReview.js");

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
    interReviewController.createReview
));

// Delete review route
router.delete("/:reviewId",isLoggedIn,
     isReviewAuthor,
     wrapAsync(interReviewController.deleteReview)
);

module.exports = router;