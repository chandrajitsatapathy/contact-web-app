require('dotenv').config();
const express = require("express");
const https = require("https");
const app = express();
const bodyparser = require("body-parser");
const { url } = require("inspector");
const { ApplicationContext } = require('twilio/lib/rest/api/v2010/account/application');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
console.log(accountSid);
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid,authToken);

app.use(bodyparser.urlencoded({ extended: true }));
// To get the message from text field
app.get("/",function(req,res){
    res.sendFile(__dirname +"/Send_message.html")
})
app.post("/",function(req,res){
    const a = req.body.customermessage;
    console.log(req.body.customermessage);
    const b = "Hi your OTP  "
    // Random 6 digit otp
    const query = a +b+ Math.floor((Math.random() * 1000000) + 1);
client.messages.create({
    body: query,
    from: '+18432793357',
    to: '+919938630291'
})
.then( message => console.log(message))
.catch((err) =>console.log(err));
})


