import mongoose from 'mongoose';
import dns from "dns"
const connectDB = async () => {

  try {
    dns.setServers(["1.1.1.1", "8.8.8.8"]);
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
    console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MONGODB connection error:", error)
    process.exit(1)
  }
}

export {connectDB}
