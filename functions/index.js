const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");

const stripe = require("stripe")(
  "sk_test_51KsSipSCCbalLSeDJlCgpheYCuo4me6hvsOboYc1mqtEEFqm0AFlOBJ8EXFe9okBQoBCmuswRGZLmhdjJuDkiPp600RQrfhLZ6"
);
//Api...

// App config
const app = express();

// middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// apri routesss
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("requested paymetn for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  // Ok
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// this line hear basically listens
exports.api = functions.https.onRequest(app);
