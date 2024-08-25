const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/';

const connectToMongoose = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to Mongo');
    } catch (error) {
        console.error('Failed to connect to Mongo', error);
    }
};

module.exports = connectToMongoose;