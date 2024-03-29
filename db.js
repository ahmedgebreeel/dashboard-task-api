import mongoose from "mongoose";

const connectToMongoDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
        
    } catch (error) {
        console.log("error in connecting MongoDB", error.message);
    }
}

export default connectToMongoDB;