const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // Додайте інші поля, які вам потрібні
});

const postSchema = new mongoose.Schema({
    text: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    // Додайте інші поля, які вам потрібні
});

const followingSchema = new mongoose.Schema({
    follower: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    following: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);
const Following = mongoose.model('Following', followingSchema);

module.exports = { User, Post, Following };
