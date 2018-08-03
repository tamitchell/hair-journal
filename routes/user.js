const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.js');
const profileController = require('../controllers/profile')
// const statsController   = require('../controllers/stats')



router.get('/login', userController.login);
router.post('/login', userController.createLogin);
router.get('/sign-up', userController.signUp);
router.post('/sign-up', userController.createSignUp);
router.get('/logout', userController.logout);
router.get('/profile/:id', profileController.showProfile)

router.get("/:id", profileController.showRegimen)
router.put("/:id", profileController.requireAuth, profileController.updateRegimen);
router.get("/profile/regimen/new", profileController.requireAuth, profileController.newRegimen);
router.post("/regimen", profileController.requireAuth, profileController.createRegimen);

router.get("/:id", profileController.showRoutine);
router.put("/:id", profileController.requireAuth, profileController.updateRoutine);
router.get("/routine/new", profileController.requireAuth, profileController.newRoutine);
router.post("/:id", profileController.requireAuth, profileController.createRoutine);

// router.post("/profile/:id", profileController.createStats);
// router.get("/profile/:id/new", profileController.newStat);
// router.get("/profile/:id", profileController.showStats);
// router.put("/profile/:id", profileController.updateStat);

module.exports = router;