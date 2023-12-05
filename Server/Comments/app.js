const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const { randomBytes } = require("crypto");

app.use(bodyParser.json());
app.use(cors());

const commentsByBlogId = {}

app.get("/blogs/:id/comments/", (req,res) => {
    res.send(commentsByBlogId[req.params.id] || []);
})

app.post("/blogs/:id/comments/", (req,res) => {
    const commentId = randomBytes(4).toString("hex");
    const { content } = req.body;
    const comment = commentsByBlogId[req.params.id] || [];

    comment.push({id : commentId, content: content});
    commentsByBlogId[req.params.id] = comment;
    res.status(201).send(comment);
})

app.listen(4001, () => {
    console.log("server started on port 4001");
})