require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Note = require("./models/struct");
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
const port=process.env.PORT || 4000
DBSTRING="mongodb+srv://raushan8292kumardeo:ra0409ku@cluster0.evi9cj4.mongodb.net/notesDB"
mongoose.connect(DBSTRING).then(() => {
  app.get("/", (req, res) => {
    let response = { message: "API working fine!!!" };
    res.send(response);
  });
  const rootrouter = require("./routes/route");
  app.use("/notes", rootrouter);
});

app.get("/response", (req, res) => {
  res.send("Hellllo BOOOOOSS");
});
app.listen(port, () => {
  console.log(`server is listen port ${port}`);
});
