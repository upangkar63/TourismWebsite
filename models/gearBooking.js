const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Booking Schema (User's Booking Information)
const BookingSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
  gearId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'gear',
    required: true,  // Reference to the specific gear being booked
  },
  name: {
    type: String,
    required: true,
    trim: true,
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
    match: [/^\+\d{1,3}\d{10}$/, 'Please enter a valid phone number'],
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  pincode: {
    type: String,
    required: true,
    match: [/^\d{6}$/, 'Please enter a valid pincode'],  // Assuming pincode is 6 digits
  },
  bookingDate: {
    type: Date,
    default: Date.now,
  },
});

const gearBooking = mongoose.model('gearBooking', BookingSchema);
module.exports = gearBooking;
