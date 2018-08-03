const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/application.js');
const regimenController = require('../controllers/regimen')
const userController = require('../controllers/user')
const statsController = require('../controllers/stats')

router.get('/', applicationController.index)
router.get('/user', userController.index);
router.get('/user/profile/:id', userController.showProfile)
router.get('/regimen', regimenController.show)
router.get('/stats', statsController.show)


module.exports = router;