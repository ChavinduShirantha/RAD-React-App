const express = require('express');
const ContactController = require('../controller/ContactController');
const router = express.Router();


router.post('/submit', ContactController.submitContactDetails);

module.exports =router;
