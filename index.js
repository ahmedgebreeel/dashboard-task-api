import express from "express";
import dotenv from "dotenv";

import quizRoute from "./routes/quiz.route.js";
import announcementRoute from "./routes/announcement.route.js";
import connectToMongoDB from "./db.js";

const PORT = process.env.PORT || 3000;

dotenv.config();
const app = express();


app.use("/api/quiz", quizRoute);
app.use("/api/announcement", announcementRoute);


app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`);
});