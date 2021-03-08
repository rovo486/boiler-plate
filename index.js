const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://rovo486:basic99@boilerplate.k1xlm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 111')
})
// mongodb rovo486 , basic99
// mongodb+srv://rovo486:<password>@boilerplate.k1xlm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})