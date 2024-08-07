import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("Aleady connected to database...");
        return;
    };

    try {
        const db_con = await mongoose.connect(process.env.MONGODB_URL || "", {});

        connection.isConnected = db_con.connections[0].readyState;
        console.log("Database Connected Successfully...");
    } catch (error) {
        console.log("Database Connection Failed", error);
        process.exit();
    };
};

export default dbConnect;