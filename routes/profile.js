const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile.js');

router.get('/:id', profileController.showProfile)

router.post("/:id", profileController.createStat);
router.get("/:id/stats/new", profileController.newStat);
router.get("/:id", profileController.showStats);
router.get("/:id/stats/edit", profileController.editStat)
router.put("/:id", profileController.updateStat);

router.post("/:id", profileController.requireAuth, profileController.createRegimen);
router.get("/:id/regimen/new", profileController.requireAuth, profileController.newRegimen);
router.get("/:id", profileController.showRegimen);
router.put("/:id", profileController.requireAuth, profileController.updateRegimen);

 module.exports = router; 