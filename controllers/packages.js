const Package = require("../models/travelTour.js");
const Booking = require("../models/booking.js");
const User = require("../models/user.js");

//Index route
module.exports.index = async (req, res) => {
    const allPackages = await Package.find({}); 
    res.render("packages/index.ejs", { allPackages });
}


module.exports.book = async (req, res) => {
    const packageId = req.params.id;
    const package = await Package.findById(packageId);

    if (!package) {
        return res.status(404).send('Package not found');
    }
    // Passing package data to the view
    res.render("packages/book.ejs", {package});
};

// boooking post
module.exports.booking = async (req, res) => {
    const packageId = req.params.id;
    const userId = req.user._id;

    let package;
    let packageType;

    try {
        package = await Package.findById(packageId);
        if (package) {
            packageType = 'Package';
        } else {
            package = await InterPackage.findById(packageId);
            if (package) {
                packageType = 'InterPackage'; 
            }
        }
        if (!package) {
            req.flash("error", "Package not found.");
            return res.redirect("/packages/international");
        }

        const { name, email, phoneno, state, city, travelDate, packSize, countryCode, totalPrice } = req.body;
 
        const fullPhoneNumber = countryCode + phoneno;
        
        const booking = new Booking({
            userId,
            packageId: package._id,  // Reference the correct package
            packageType: packageType,  // Set the correct package type ('Package' or 'InterPackage')
            name,
            email,
            phoneno: fullPhoneNumber,
            state,
            city,
            travelDate,
            packSize,
            totalPrice: parseFloat(totalPrice)
        });

        // Save the booking to the database
        await booking.save();

        req.flash("success", "The package has been successfully booked!");
        res.redirect(`/packages/international/${packageId}/bookings/${booking._id}/confirm`);

    } catch (err) {
        console.log("Booking error:", err);
        req.flash("error", "An error occurred while processing your booking.");
        res.redirect(`/packages/international/${packageId}/book`);  // Redirect back to the booking page in case of error
    }
};



// confirming book 
module.exports.confirmbook = async (req, res) => {
    try {
        const { packageId, bookingId } = req.params;
        
        const booking = await Booking.findById(bookingId).populate("packageId").populate("userId");
        if (!booking) {
            req.flash("error", "Booking not found");
            return res.redirect("/packages/domestic");
        }

        res.render('packages/bookingConfirmation.ejs', { booking });
    } catch (error) {
        console.error(error);
        req.flash("error", "Error displaying booking confirmation.");
        res.redirect("/packages/domestic");
    }
};




module.exports.about = (req, res) => {
    res.render("packages/about.ejs");
    // res.send("about");
}



// show route
module.exports.showDomestic = async (req, res) => {
    let { id } = req.params;
    const pack = await Package.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author",
            }
        })
        .populate("owner");
    if (!pack) {
        req.flash("error", "Package not found!");
        return res.redirect("/packages");
    }
    res.render("packages/show.ejs", { pack });

}