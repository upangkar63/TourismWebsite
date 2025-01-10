const Package = require("./models/travelTour");
const Review = require("./models/review");
const ExpressError = require("./utils/ExpressError");
const {packageSchema, packagesSchema, reviewSchema} = require("./schema.js");

module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()) {
        // redirect url
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in to your account!");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req, res, next) => {
    if(req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}


module.exports.isReviewAuthor = async (req, res, next) => {
    try {
        let { id, reviewId } = req.params;
        let review = await Review.findById(reviewId);
        if (!review.author.equals(res.locals.currUser._id)) {
            req.flash("error", "You are not the author of this Review!");
            return res.redirect(`/packages/domestic/${id}`);
        }
        next();
    } catch (err) {
        req.flash("error", "Something went wrong.");
        return res.redirect(`/packages/domestic/${id}`);
    }
}