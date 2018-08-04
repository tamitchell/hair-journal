const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile.js');

 router.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
  });

router.get('/:id', profileController.showProfile)

router.post("/", profileController.requireAuth, profileController.createRegimen);
router.get("/:id/new", profileController.requireAuth, profileController.newRegimen);
router.get("/:id", profileController.showRegimen);
router.put("/:id", profileController.requireAuth, profileController.updateRegimen);

router.post("/", profileController.createStat);
router.get("/new", profileController.newStat);
router.get("/:id", profileController.showStats);
router.put("/:id", profileController.updateStat);

 module.exports = router; 