const { body } = require('express-validator');

// Validation rules for user registration
exports.registerValidation = [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

// Validation rules for user login
exports.loginValidation = [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').exists().withMessage('Password is required'),
];
