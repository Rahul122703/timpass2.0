const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL, {
        });

        console.log("DB connected");
    } catch (error) {
        console.error(` MongoDB Connection Error: ${error.message}`);
        process.exit(1); // Exit process if connection fails
    }
};

// Event Listeners for MongoDB
mongoose.connection.on('disconnected', () => {
    console.log("⚠️ MongoDB Disconnected");
});

module.exports = connectDB;
