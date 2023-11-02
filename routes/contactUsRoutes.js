const express = require('express');
const router = express.Router();
const ContactUsController = require('../controllers/contactUsController.js');

router.get('/contactus', ContactUsController.getAllContactUsMessages);
router.get('/contactus/:id', ContactUsController.getMessageById);
router.post('/contactus', ContactUsController.createMessage);
router.delete('/contactus/:id', ContactUsController.deleteMessage);
router.put('/contactus/:id', ContactUsController.updateMessage);
module.exports = router