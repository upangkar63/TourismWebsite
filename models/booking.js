const { ref } = require('joi');
const mongoose = require('mongoose');
const Package = require("../models/travelTour");
const InterPackage = require("../models/internationalPack");

const bookingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    packageId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'packageType'
    },
    packageType: {
        type: String,
        required: true,
        enum: ['Package', 'InterPackage']
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        match: /.+\@.+\..+/ 
    },
    phoneno: {
        type: String,
        required: true,
        trim: true,
        match:  [/^\+\d{1,3}\d{10}$/, 'Please enter a valid phone number with country code']
    },
    state: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    travelDate: {
        type: Date,
        required: true
    },
    packSize: { 
        type: String, 
        required: true
     },
     totalPrice: { 
        type: Number,
         required: true
     }, 
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { strictPopulate: false });

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
