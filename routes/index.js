const router = require("express").Router();

const { chargeEndpoint, verifyPayment } = require("../controller");

router.post("/", chargeEndpoint);

router.post("/verifyPayment", verifyPayment);

module.exports = router;
