// const express = require('express');
// const router = express.Router();
// const profileController = require('../controllers/profile.js');
// // const regimenController = require("../controllers/regimen");
// // const statsController = require("../controllers/stats");

// router.use((req, res, next) => {
//     res.locals.currentUser = req.user;
//     next();
//   });

// router.get('/:id', profileController.show)
// router.post('/:id/stats', profileController.newStat )  
// router.post("/", profileController.requireAuth, profileController.createRegimen);
// router.get("/:id/new", profileController.requireAuth, profileController.newRegimen);
// router.get("/:id", profileController.showRegimen);
// router.put("/:id", profileController.requireAuth, profileController.updateRegimen);



// router.post("/", profileController.createStats);
// router.get("/new", profileController.newStat);
// router.get("/:id", profileController.showStats);
// router.put("/:id", profileController.updateStat);

// router.use('/stats', require('./stats'))
// router.use('/regimen', require('./regimen'))

// module.exports = router;