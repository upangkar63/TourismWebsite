const express = require("express");
const router = express.Router({mergeParams: true});
const Package = require("../models/travelTour.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema} = require("../schema.js");
const Review = require("../models/review.js");

const validateReview = (req, res, next) => {
    let {error} = reviewSchema.validate(req.body);
    if(error) {
        let errMsge = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsge);
    } else {
        next();
    }
}

router.post("/", 
    validateReview, wrapAsync( 
    async(req, res ) => {
        // console.log(req.body);
    let package = await Package.findById(req.params.id);
    if(!package) {
        throw new ExpressError("Package not found", 404);
    }
    let newReview = new Review(req.body.review);
    package.reviews.push(newReview);

    await newReview.save();
    await package.save();

    req.flash("success", "New review Created!");

    res.redirect(`/packages/domestic/${package._id}`);
    
 }
));

// Delete review route
router.delete("/:reviewId", wrapAsync( async(req, res) => {
    let {id , reviewId} = req.params;

    await Package.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Review Deleted!")
    res.redirect(`/packages/domestic/${id}`);


})
);
module.exports = router;