const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const data = {}

app.post("/events", (req,res) => {
    const { type } = req.body;

    if(type === "BlogCreated"){
        const { id, title } = req.body;
        data[id] = {
            id,
            title,
            comments: [{}]
        }
    }else{
        const { blogId, id, content } = req.body;
        data[blogId].comments.push({id, content});
    }

    res.send({});
})

app.get("/blogs", (req,res) => {
    res.send(data);
})

app.listen(4002, () => {
    console.log("Query service running on port 4002");
})