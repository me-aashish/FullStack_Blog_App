const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/events", async(req,res) => {
    console.log(req.body);

    const { type, data } = req.body;

    if(type === "CommentCreated"){
        const { id, content, blogId, status } = data;

        const newStatus = content.includes("orange") ? "Rejected" : "Approved";

        const newData = {
            type: 'CommentModified',
            data: {
                id,
                content,
                blogId,
                newStatus
            }
        }

        await axios.post("http://localhost:4003/events", newData);
    }
    res.send({});
})

app.listen(4004, () => {
    console.log("Moderation service running on port 4004");
})