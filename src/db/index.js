import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constants.js";


let a;
const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected! ${connectionInstance.connection.host}`);  
        a = connectionInstance.connection.host;
    }
    catch(error){
        console.log("MONGODB connection error: ", error);
        process.exit(1)   // study about this process.
    }
}
// console.log("hello");
// console.log(a);

(async () => {
    console.log("hello");
    const a = await connectDB();
    console.log(a);
})();


export default connectDB