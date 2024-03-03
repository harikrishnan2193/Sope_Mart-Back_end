require('dotenv').config()

const express = require('express')
const cors = require('cors')
require('./DB/connect')

const routes = require('./ROUTES/router')

const martServer = express()

martServer.use(cors())
martServer.use(express.json())
martServer.use(routes)

const PORT = 3000 || process.env.PORT

martServer.listen(PORT,()=>{
    console.log('server running successfully');
})

martServer.get(`/`,(req,res)=>{
    res.send(`<h1>server running successfully and redy to accept client request</h1>`)
})