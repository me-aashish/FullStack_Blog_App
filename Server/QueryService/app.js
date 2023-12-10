const express = require("express");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const queryData = {};

const handleQuery = (type, data) => {
  if (type === "BlogCreated") {
    const { id, title } = data;
    queryData[id] = {
      id,
      title,
      comments: [],
    };
  } else if (type === "CommentCreated") {
    const { blogId, id, content, status } = data;
    queryData[blogId].comments.push({ id, content, status });
  } else if (type == "CommentUpdated") {
    const { blogId, id, content, newStatus } = data;
    const blog = queryData[blogId];
    const comment = blog.comments.find((comment) => comment.id === id);

    comment.status = newStatus;
    comment.content = content;
  }
};

app.post("/events", (req, res) => {
  // console.log(req.body);
  const { type, data } = req.body;
  
  handleQuery(type, data);
    
  res.send({});
});

app.get("/blogs", (req, res) => {
  res.send(queryData);
});

app.listen(4002, async() => {
  console.log("Query service running on port 4002");
  

  const res = await axios.get("http://localhost:4003/events");

  for(let event of res.data){
    console.log("Processing event of type ", event.type);
    handleQuery(event.type, event.data);
  }

});
