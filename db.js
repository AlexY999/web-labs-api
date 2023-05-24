const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function connectDb() {
    try {
        await client.connect();
        console.log('Connected to database successfully.');
        return client.db('test-mongo');
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectDb;