const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile.js');

router.get('/:id', profileController.showProfile,profileController.showStats, profileController.showRegimen)
router.get("/:id/stats/new", profileController.newStat);
router.get("/:id/regimen/new", profileController.requireAuth, profileController.newRegimen);
router.get("/:id/stats/edit", profileController.editStat)
// router.get("/:id/regimen/edit", profileController.editRegimen)
router.get("/:id/stats/show", profileController.showStats);
router.get("/:id/regimen/show", profileController.showRegimen);

router.post("/:id/stats/create", profileController.requireAuth, profileController.createStat, );
router.post("/:id/regimen/create", profileController.createRegimen);

router.put("/:id/stats/update", profileController.updateStat);
router.put("/:id/regimen/update", profileController.requireAuth, profileController.updateRegimen);

 module.exports = router; 