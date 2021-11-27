const express = require("express");
const cors = require("cors");

let app = express();

app.use(cors());
app.use(express.json())


app.listen(3001, ()=> {
    console.log("Server Started on PORT 3001")
})