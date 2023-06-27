import mongoose from "mongoose";




const Connection = async()=>{
    const URL="mongodb://127.0.0.1:27017/myLoginRegisterDB";
    try{
        mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser: true});
        console.log('db Connected sucessfully');
    } catch(error){
        console.log('Error while connecting with the database' , error);
    }
}

export default Connection;