const Destination = require("../models/destination");
const cities = require("./cities");
const {
  places,
  descriptors,
  description,
} = require("./seedHelpers");
const connect = require("../db");
const mongoose = require("mongoose");

connect();

const sample = (array) =>
  array[Math.floor(Math.random() * array.length)];

const seedDb = async () => {
  try {
    await Destination.deleteMany({});
    for (let i = 1; i <= 20; i++) {
      const random400 = Math.floor(
        Math.random() * 400
      );
      const destination_price =
        Math.floor(Math.random() * 10000) + 1000;
      const camp = new Destination({
        author: "667aa1327b9c6ed3b1aa56cd",
        destination_location: `${cities[random400].city},${cities[random400].state}`,
        destination_title: `${sample(
          descriptors
        )} ${sample(places)}`,
        destination_description: description[i],
        destination_price,
        destination_geometry: {
          type: "Point",
          coordinates: [
            cities[random400].long,
            cities[random400].lat,
          ],
        },
        destination_images: [
          {
            image_url: `https://res.cloudinary.com/dchlc6jte/image/upload/v1719332378/CampOutdoors/${i}_campoutdoors.jpg`,
            image_filename: `CampOutdoors/${i}_campoutdoors.jpg`,
          },
        ],
      });
      await camp.save();
    }
  } catch (err) {
    console.log(err);
  }
};

seedDb().then(() => {
  mongoose.connection.close();
});
