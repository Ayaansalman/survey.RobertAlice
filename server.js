const express= require('express') 
const path = require('path')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')


dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS ,()=> console.log("Database connected"))



app.use(express.json())
app.use(cors())
app.use(express.static('static'))
app.use('/app', routesUrls)   
app.get('*' , (req , res) => {
    res.sendFile(path.join(__dirname,'static/index.html'))
 

}) 
app.listen(8080,()=> console.log ("server is up and running on port:4000"))      