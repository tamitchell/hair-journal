const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.js');
const profileController = require('../controllers/profile')



router.get('/login', userController.login);
router.post('/login', userController.createLogin);
router.get('/sign-up', userController.signUp);
router.post('/sign-up', userController.createSignUp);
router.get('/logout', userController.logout);


// router.get('/:id', profileController.showProfile)

// router.get("/profile/stats/new", profileController.newStat);

// router.post("/profile/:id", profileController.requireAuth, profileController.createRegimen);
// router.get("/profile/:id/new", profileController.requireAuth, profileController.newRegimen);
// router.get("/profile/:id", profileController.showRegimen);
// router.put("/profile/:id", profileController.requireAuth, profileController.updateRegimen);

// router.post("/profile/:id", profileController.createStats);
// router.get("/profile/:id", profileController.showStats);
// router.put("/profile/:id", profileController.updateStat);
module.exports = router;