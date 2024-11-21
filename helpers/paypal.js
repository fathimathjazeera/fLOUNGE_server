const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "Abrw5siMIeNtU1456bkcnq3UoYwcGkP0EsYtkE7a3Teriy3fQLTk8Cu4pMgHdxa5dKgOH_srVzG9imUJ",
  client_secret: "ENlwuACYfRJ4Ul0gbtbrY-Dn_I6dvGoR2dOALBq-rCgWEpplQI04GuYPrWynl-WQ-N_e44TEy8AsV9Bl",
});

module.exports = paypal;
