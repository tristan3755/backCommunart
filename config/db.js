const mongoConnect=require('mongoose')
const connectDb=async()=>{
try{
const connect = await mongoConnect.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify: false
})
console.log('mongo connecté')
}
catch(error){
console.log(error)
}
}
module.exports=connectDb