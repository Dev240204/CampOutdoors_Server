const express = require("express");
const User = require("./models/user");
const Blog = require("./models/blog");
const Booking = require("./models/booking");
const Destination = require("./models/destination");
const Review = require("./models/review");
const Image = require("./models/image");
const connect = require("./db");
const authRouter = require("./routers/authRouter");
const cors = require("cors");
const campRouter = require("./routers/campRouter")

connect();

const app = express();
const port = 8080

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/auth", authRouter);
app.use("/camp", campRouter)

app.get("/", (req, res) => {    
    res.send("Server Listening on port 8080");
})

app.listen(port, () => {
    console.log("Server is running on port 8080");
});
