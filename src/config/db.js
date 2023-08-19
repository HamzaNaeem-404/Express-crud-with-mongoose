import mongoose from "mongoose";

const connectDB= (async)=>{

    const uri="mongodb://127.0.0.1:27017/todo_app";
    mongoose.connect(uri,
        {
            autoCreate:true,
            autoIndex:true,
        })
        .then((res)=>{
            console.log("DB Connection");
        })
        .catch((err)=>{
            console.log(err);
        });

};

export default connectDB;