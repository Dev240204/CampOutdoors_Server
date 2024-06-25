if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const mongoose = require("mongoose");
const User = require("../models/user");
const Blog = require("../models/blog");
const Booking = require("../models/booking");
const Destination = require("../models/destination");
const Review = require("../models/review");
const Image = require("../models/image");
const dbUrl =
  process.env.DB_URL ||
  "mongodb://localhost:27017/travelAgency";

mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: {
        version: "1",
        strict: true,
        deprecationErrors: true,
      },
    });
    console.log(
      "Connected to the database"
    );
  } catch (error) {
    console.error(
      "Database connection error:",
      error
    );
  }
};

module.exports = connect;