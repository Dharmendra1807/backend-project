/* in this file we are connecting our database with our backend */
// require("dotenv").config();  // we will get  environment variables from a .env file
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

let mongoose = require("mongoose");
mongoose.set("strictQuery", true);

// here we are reactivating  the mongodb connection uri from the environment variables
const mongoURI = "mongodb+srv://dwivedieng:7OhRwFcuM3G3JNec@cluster0.kkayq5x.mongodb.net/?retryWrites=true&w=majority"
// this is the function to connect mongodb from mongoose library 
const connectToMongo = async () => {
  mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      //  give  a message when connection is successfull
      console.log("connection established with mongodb server online");
    })
    .catch((err) => {
      // give  error message, error occurs during the connection
      console.log("error while connection", err);
    });
};

exports.connection = connectToMongo;
