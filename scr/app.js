const express = require('express');
const router = express.Router();
const app = express();
const connectDb = require('./db');
const apiRouter = require('./api');

app.use(express.json());
app.use('/api', apiRouter);

(async () => {
    try {
        await connectDb();
        app.listen(3001, () => {
            console.log('Server is listening on port 3001');
        });
    } catch (error) {
        console.error('Failed to connect to database:', error);
    }
})();

module.exports = router;