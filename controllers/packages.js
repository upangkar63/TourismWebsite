const Package = require("../models/travelTour.js");

//Index route
module.exports.index = async (req, res) => {
    const allPackages = await Package.find({});
    res.render("packages/index.ejs", {allPackages});
}

module.exports.book = (req, res) => {
    res.render("packages/book.ejs");
}
module.exports.about = (req, res) => {
    res.render("packages/about.ejs");
    // res.send("about");
}

// show route
module.exports.showDomestic = async (req, res) => {
    let {id} = req.params;
    const pack = await Package.findById(id).populate("reviews");
    if(!pack) {
        req.flash("error", "Package not found!");
        return res.redirect("/packages");
    }
    res.render("packages/show.ejs", {pack});

}