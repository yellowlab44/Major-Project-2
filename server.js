import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;
const TD_KEY = process.env.TWELVE_DATA_KEY;

console.log("API key loaded?", TD_KEY ? "yes" : "no");
