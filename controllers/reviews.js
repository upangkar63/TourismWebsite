const Review = require("../models/review.js");
const Package = require("../models/travelTour.js");

module.exports.createReview = async(req, res ) => {
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


// Delete review
module.exports.deleteReview =  async(req, res) => {
    let {id , reviewId} = req.params;

    await Package.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Review Deleted!")
    res.redirect(`/packages/domestic/${id}`);
}