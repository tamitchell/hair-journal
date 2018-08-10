const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.js');
const profileController = require('../controllers/profile')


router.get('/login', userController.login);
router.post('/login', userController.createLogin);
router.get('/sign-up', userController.signUp);
router.post('/sign-up', userController.createSignUp);
router.get('/logout', userController.logout);

router.post("/:id", profileController.createStat);
router.get("/stats/new", profileController.newStat);
router.get("/:id", profileController.showStats);
// router.get("/:id/stats/edit", profileController.editStat)
// router.put("/:id/stats/update", profileController.updateStat);


module.exports = router;