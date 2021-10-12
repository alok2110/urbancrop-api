const mongoose = require("mongoose");
require("dotenv").config();
module.exports = connect = async () => {
  try {
    const response = await mongoose.connect(
      "mongodb+srv://app:app@cluster0.0jejw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
      }
    );
    console.log("connection created");
  } catch (error) {
    console.log(error);
  }
};
