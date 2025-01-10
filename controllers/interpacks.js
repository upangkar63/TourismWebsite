const InterPackage = require("../models/internationalPack.js");
const Package = require("../models/travelTour.js");
const Booking = require("../models/booking.js");
const User = require("../models/user.js");

// Index route for international packages
module.exports.index = async(req, res) => {
    const allPackages = await InterPackage.find({});
    res.render("interpack/index.ejs", {allPackages});
}

// international book
module.exports.book = async(req, res) => {
    const interpackId = req.params.id;
    const interPack = await InterPackage.findById(interpackId);

    if (!interPack) {
        return res.status(404).send('Package not found');
    }
    res.render("interpack/booking.ejs", {interPack});
 }

//  book 
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



// confirm book
module.exports.confirmbook = async (req, res) => {
    try {
        const { id, bookingId } = req.params;

        // Retrieve booking and populate packageId (whether it's domestic or international)
        const booking = await Booking.findById(bookingId)
            .populate("packageId")  // This ensures packageId is populated (can be domestic or international)
            .populate("userId");

        if (!booking) {
            req.flash("error", "Booking not found");
            return res.redirect("/packages/international"); 
        }


      
        res.render('packages/bookingConfirmation.ejs', { booking });
    } catch (error) {
        console.error(error);
        req.flash("error", "Error displaying booking confirmation.");
        res.redirect("/packages/international");
    }
};


 
//  Show route for international packs
module.exports.interPackShow = async(req, res) => {
    let {id} = req.params;
        const interPack = await InterPackage.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author",
            }
        })
        .populate("owner");
        // console.log (interPack);
        if(!interPack) {
            req.flash("error", "International Package not found!");
            return res.redirect("/international");
        }
        res.render("interpack/show.ejs", {interPack});
    }