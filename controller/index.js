const PaymentSchema = require("../models");
const paystack = require("paystack-api")(process.env.MYPAYSATCK_SECRETKEY);

exports.chargeEndpoint = async (req, res) => {
  // const payment = await new PaymentSchema(req.body).save();
  // res.json(payment);

  const { amount, email } = req.body;
  try {
    const initializeTransfer = await paystack.transaction.initialize({
      key: process.env.MYPAYSATCK_PUBLICKEY, // Replace with your public key
      email,
      amount: amount * 100,
      currency: "NGN",
    });
    return res.json(initializeTransfer);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: "an error occured" });
  }
};

exports.verifyPayment = async (req, res) => {
  const { path, reference } = req.body;
  try {
    const initializeTransfer = await paystack.transaction.verify({
      key: process.env.MYPAYSATCK_PUBLICKEY,
      path,
      reference,
    });
    return res.json(initializeTransfer);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: "an error occured" });
  }
};
