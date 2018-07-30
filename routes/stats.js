const express = require("express");
const router = express.Router();
const statsController = require("../controllers/stats");

router.post("/", statsController.create);
router.get("/new", statsController.new);
router.get("/:id", statsController.show);
router.put("/:id", statsController.update);

module.exports = router;