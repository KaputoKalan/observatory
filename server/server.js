const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
const passport = require('passport')
const { notFound, errorHandler } = require("./middlewares/errorMiddleware")


const port = process.env.PORT || 5000


//Middelware
app.use(cors())
app.use(express.json())
app.use(passport.initialize())




//Mongodb connections
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

const userRouter = require('./routes/user')
app.use('/users', userRouter)

app.use(notFound)
app.use(errorHandler)
app.listen(port, ()=>{
    console.log(`the app is running on Port: ${port}`) 
})

