import mongoose from "mongoose";
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DBLOCAL);
        console.log("DB Connected!");
    } catch(error) {
        console.log(error);
    }

};

export default connectDB;