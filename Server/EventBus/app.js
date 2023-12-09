const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", async(req,res) => {
    const  event  = req.body;
    console.log(event);
    await axios.post("http://localhost:4000/events", event);
    await axios.post("http://localhost:4001/events", event);
    await axios.post("http://localhost:4002/events", event);
    await axios.post("http://localhost:4004/events", event);

    res.send({"status" : "OK"})
})

app.listen(4003, () => {
    console.log("Event bus listening on 4003");
})