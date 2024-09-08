const connectToMongoose = require("./db");
connectToMongoose();
const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());

const port = 5000;

app.use(express.json());
app.listen(port, () => {
  console.log(`XNotesy listening on port ${port}`);
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));
