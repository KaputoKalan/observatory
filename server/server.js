const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const  uri = process.env.MONGO_URI
 

mongoose.connect(uri, {
    useNewUrlParser:true,
    useUnifiedTopology: true
})

const connection = mongoose.connection
connection.once("open", () => {
    console.log('MongoDB connection established successfully!')
})

const postRouter = require('./routes/post')
app.use('/post', postRouter)

const addIssueRouter = require('./routes/addissue')
app.use('/addissue', addIssueRouter)


app.listen(port, ()=>{
    console.log(`the app is running on Port: ${port}`) 
})

