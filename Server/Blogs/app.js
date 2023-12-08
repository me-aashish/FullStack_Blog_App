const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const { randomBytes } = require("crypto");
const { default: axios } = require("axios");

app.use(cors());
app.use(bodyParser.json());


const posts = {}

app.post("/blogs", async(req,res) => {
    const id = randomBytes(4).toString("hex");
    const { title } = req.body;
    posts[id] = {
        id: id,
        title: title
    }
    await axios.post("http://localhost:4003/events", {
        type: "BlogCreated",
        data: {
            id,
            title
        }
    })
    res.status(201).send("Blog created");
})

app.post("/events", async(req,res) => {
   

    console.log(req.body);
    res.send({});
})

app.get("/blogs", (req,res) => {
    res.send(posts);
})

app.listen(4000, () => {
    console.log("Server is listening on port 4000");
})