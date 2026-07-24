import mongoose from "mongoose";
import dns from "dns";

// Fix: Node's default resolver fails on SRV lookups on this network
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error", error);
        process.exit(1)
    }
}
export default connectDB