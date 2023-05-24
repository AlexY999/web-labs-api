// schemaController.js

const { User, Post, Following } = require('./schema');

// schemaController.js

async function register(req, res) {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ error: 'Email already exists.' });
        }
        const user = new User({ name, email, password });
        await user.save();
        res.json({ message: 'User registered successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred.' });
    }
}

async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }
        if (user.password !== password) {
            return res.status(401).json({ error: 'Invalid password.' });
        }
        // Додайте тут генерацію і відправку токену авторизації
        res.json({ message: 'Logged in successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred.' });
    }
}

async function deleteAccount(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }
        if (user.password !== password) {
            return res.status(401).json({ error: 'Invalid password.' });
        }
        // Додайте тут код для видалення аккаунту з бази даних
        await User.deleteOne({ email });
        res.json({ message: 'Account deleted successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred.' });
    }
}

async function createPost(req, res) {
    try {
        const { text, userId } = req.body;
        const post = new Post({ text, author: userId });
        await post.save();
        res.json({ message: 'Post created successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred.' });
    }
}

async function getAllPosts(req, res) {
    try {
        const posts = await Post.find().populate('author', 'name');
        res.json({ posts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred.' });
    }
}

async function followToUser(req, res) {
    try {
        const { followerId, followingId } = req.body;
        const following = new Following({ follower: followerId, following: followingId });
        await following.save();
        res.json({ message: 'Followed successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred.' });
    }
}

module.exports = {
    register,
    login,
    createPost,
    getAllPosts,
    followToUser,
    deleteAccount,
};