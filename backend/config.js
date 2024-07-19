const mongoose = require('mongoose');
require('dotenv').config({ path: './server/.env' });

const connectDB = async () => {
    try {
        console.log('MONGODB_URI:', process.env.MONGODB_URI);
        if (!process.env.MONGODB_URI) {
            throw new Error('MONGODB_URI is not defined');
        }
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;