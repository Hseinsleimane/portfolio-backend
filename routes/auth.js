const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Users = require('../models/users');

router.post('/refresh-token', async (req, res) => {
    const { refreshToken } = req.body;
    if (!refreshToken) return res.status(401).json({ message: 'Refresh token required' });

    jwt.verify(refreshToken, process.env.REFRESH_SECRET_KEY, async (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid refresh token' });

        // Generate new access token
        const newToken = generateToken(user.id);
        res.status(200).json({ token: newToken });
    });
});

module.exports = router;
