const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://laca:jae09908@cluster0.gjxhg.mongodb.net/egypt?retryWrites=true&w=majority"
    );
    console.log("db connect....");
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectDB;
