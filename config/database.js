const mongoose = require("mongoose");
const config = require("./dotenv");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(config.MONGODB_URI, {
      dbName: config.DB_NAME,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(
      `MongoDB connected: ${connection.connection.host}/${connection.connection.port}`
    );
  } catch (ex) {
    console.error(`MongoDB connection error: ${ex}`);
    process.exit(1);
  }
};

module.exports = connectDB;
