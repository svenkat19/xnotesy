const connectToMongoose=require('./db')
connectToMongoose();
const express = require('express')
const app = express()
const port = 5000

app.use(express.json());
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use('/api/auth',require("./routes/auth"))
// app.use('/api/notes',require("./routes/notes"))