const Review = require("../models/review.js");
const InterPack = require("../models/internationalPack.js");
const ExpressError = require("../utils/ExpressError.js");

module.exports.createReview = async(req, res) => {
    let package = await InterPack.findById(req.params.id);
    if(!package) {
        throw new ExpressError("Package not found", 404);
    }
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    await newReview.save();
    
    package.reviews.push(newReview);
    await package.save();
    
    req.flash("success", "New review Created!");
    
    res.redirect(`/packages/international/${package._id}`);
    }
    
    // Delete review
module.exports.deleteReview =  async(req, res) => {
    let {id , reviewId} = req.params;

    await InterPack.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Review Deleted!")
    res.redirect(`/packages/international/${id}`);
}