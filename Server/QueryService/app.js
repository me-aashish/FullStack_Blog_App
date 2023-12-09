const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const queryData = {}

app.post("/events", (req,res) => {
    // console.log(req.body);
    const { type } = req.body;

    if(type === "BlogCreated"){
        const { data } = req.body;
        const { id, title } = data
        queryData[id] = {
            id,
            title,
            comments: []
        }
    }else if(type === "CommentCreated"){
        const { data } = req.body;
        const { blogId, id, content } = data;
        queryData[blogId].comments.push({id, content});
    }
    console.log(queryData);
    res.send({});
})

app.get("/blogs", (req,res) => {
    res.send(queryData);
})

app.listen(4002, () => {
    console.log("Query service running on port 4002");
})