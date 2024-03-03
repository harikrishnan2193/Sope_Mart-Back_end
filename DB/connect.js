const mongoose = require('mongoose')

const connection_string = process.env.CONNECTION_STRING

mongoose.connect(connection_string).then((res)=>{
    console.log('mogodb connected successfully');
}).catch((err)=>{
    console.log(err);
})