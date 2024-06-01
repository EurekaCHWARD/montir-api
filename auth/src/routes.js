// routes.js
const express = require('express');
const { requireAuthUser, requireAuthAdmin } = require('./middleware');
const {
    getAllUser,
    signupPost,
    signupAdminPost,
    getUserById,
    editUserById,
    deleteUserById,
    login,
    logout,
    loginAdmin,
} = require('./handler');

const routes = express.Router();

// User routes
routes.get('/users', requireAuthAdmin, getAllUser);
routes.post('/users', signupPost);

// Admin signup route
routes.post('/admins', signupAdminPost);

routes.get('/users/:id', requireAuthUser, getUserById);
routes.put('/users/:id', requireAuthUser, editUserById);
routes.delete('/users/:id', requireAuthAdmin, deleteUserById);

// Login routes
routes.post('/login', login);
routes.post('/login_admin', loginAdmin);

// Logout route
routes.post('/logout', logout);

module.exports = routes;