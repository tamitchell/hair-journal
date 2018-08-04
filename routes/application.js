const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/application.js');
const profileController = require('../controllers/profile')
const userController = require('../controllers/user')

router.get('/', applicationController.index)
router.get('/user', userController.index);
router.get('/user/profile/:id', profileController.showProfile)


module.exports = router;