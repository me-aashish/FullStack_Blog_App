const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const { randomBytes } = require("crypto");

app.use(cors());
app.use(bodyParser.json());


const posts = {}

app.post("/blogs", (req,res) => {
    const id = randomBytes(4).toString("hex");
    const { title } = req.body;
    posts[id] = {
        id: id,
        title: title
    }
    res.status(201).send("Blog created");
})

app.get("/blogs", (req,res) => {
    res.send(posts);
})

app.listen(4000, () => {
    console.log("Server is listening on port 4000");
})