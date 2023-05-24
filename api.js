const express = require('express');
const productController = require('./schemaController');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Welcome to our API!' });
});

router.post('/register', productController.register);
router.post('/login', productController.login);
router.post('/createPost', productController.createPost);
router.get('/getAllPosts', productController.getAllPosts);
router.post('/follow', productController.followToUser);


module.exports = router;
