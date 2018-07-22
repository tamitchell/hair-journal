const express = require("express");
const router = express.Router();
const regimenController = require("../controllers/regimen");

router.post("/", regimenController.requireAuth, regimenController.create);
router.get("/new", regimenController.requireAuth, regimenController.new);
router.get("/:id", regimenController.show);
router.put("/:id", regimenController.requireAuth, regimenController.update);

module.exports = router;