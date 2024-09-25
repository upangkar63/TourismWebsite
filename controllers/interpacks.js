const InterPackage = require("../models/internationalPack.js");

// Index route for international packages
module.exports.index = async(req, res) => {
    const allPackages = await InterPackage.find({});
    res.render("interpack/index.ejs", {allPackages});
}

// international book
module.exports.interPackBook = (req, res) => {
    res.render("interpack/book.ejs");
 }
 
//  Show route for international packs
module.exports.interPackShow = async(req, res) => {
    let {id} = req.params;
        const interPack = await InterPackage.findById(id).populate("reviews");
        // console.log (interPack);
        if(!interPack) {
            req.flash("error", "International Package not found!");
            return res.redirect("/international");
        }
        res.render("interpack/show.ejs", {interPack});
    }