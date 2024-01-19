const mongoose = require ('mongoose');

//const DB =  process.env.DATABASE;
 const db =  'mongodb://127.0.0.1:27017/test'
 mongoose.connect( db ,{
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex : true,
    // useFindAndModify : false
})
 .then(()=>{
    console.log('CONNETED to the mongodb')
 }).catch((error)=>{
    console.log(error);
 })