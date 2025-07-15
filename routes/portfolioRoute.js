const express = require("express");
const { sendEmailController } = require("../controllers/portfolioContoller");

// Router Object
const router = express.Router();
// routes
router.post("/sendEmail", sendEmailController);
module.exports = router;
