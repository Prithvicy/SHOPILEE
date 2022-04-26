const functions = require("firebase-functions");
const express = require ("express");
const cors = require("cors");
const { request, response } = require("express");

const stripe = require ("stripe")('sk_test_51KsSipSCCbalLSeDJlCgpheYCuo4me6hvsOboYc1mqtEEFqm0AFlOBJ8EXFe9okBQoBCmuswRGZLmhdjJuDkiPp600RQrfhLZ6')
//API

// App config
const app= express();

//Middlewares
app.use(cors({origin:true}));
app.use(express.json());


//Apri roots
app.get('/',(request , response)=> response.status(200).send('hello world'))
app.post('/payments/create',async (request,response)=>{
    const total= request.query.total;
    console.log('Payment request Recived!!for this amount >>>>',total)
    const paymentIntend = await stripe.paymentIntend.create({
      amount: total, // subunits of the currency
      currency: "inr",
    });
  
    // Ok 
    response.status(201).send({
      clientSecret: paymentIntend.client_secret,
    });
  });



//listen Commands
exports.api = functions.https.onRequest(app)