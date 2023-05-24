const mongoose = require('mongoose');

async function connectDb() {
    try {
        await mongoose.connect('mongodb://localhost:27017/test-mongo', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to database successfully.');
        return mongoose.connection;
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectDb;
