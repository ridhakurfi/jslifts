const express = require("express");
const Controller = require("../controllers/controller");
const router = express.Router();

router.get("/", Controller.home);
router.get("/member", Controller.memberPage);
router.get("/admin", Controller.adminPage);
router.get("/all", Controller.getStaffs);

module.exports = router;
