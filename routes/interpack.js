const express = require("express");
const router = express.Router();
const InterPackage = require("../models/internationalPack.js");
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const { packageSchema } = require("../schema.js");
const { isLoggedIn } = require("../middleware.js");

const interpackController = require("../controllers/interpacks.js");

const validatePackage = (req, res, next) => {
    let { error } = packageSchema.validate(req.body);
    if (error) {
        let errMsge = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsge);
    } else {
        next();
    }
}
// Index route for international package
router.get("/", wrapAsync(interpackController.index));

// Book page
router.get("/:id/book", isLoggedIn, interpackController.interPackBook);

// show route for international pack
router.get("/:id",
    wrapAsync(interpackController.interPackShow));



module.exports = router;