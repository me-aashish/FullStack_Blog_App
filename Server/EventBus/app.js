const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", (req,res) => {
    axios.post("http://localhost:4000/events", req.body);
    axios.post("http://localhost:4001/events", req.body);
    axios.post("http://localhost:4002/events", req.body);

    res.send({"status" : "OK"})
})

app.listen(4003, () => {
    console.log("Event bus listening on 4003");
})