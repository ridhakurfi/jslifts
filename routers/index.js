const express = require("express");
const Controller = require("../controllers/controller");
const { errorHandler } = require("../middlewares/errorhandler");
const { authentification } = require("../middlewares/authentication");
const router = express.Router();

router.get("/", Controller.home);
router.post("/register", Controller.addStaff);
router.post("/login", Controller.login)
router.get("/staffs", Controller.getStaffs);
router.use(authentification)
router.get("/member", Controller.memberPage);
router.get("/admin", Controller.adminPage);

router.use(errorHandler);

module.exports = router;
