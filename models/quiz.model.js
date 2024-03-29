import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    due: {
        type: Date,
        required: true
    },
    
});



const Quiz = mongoose.model("Quiz", quizSchema);
export default Quiz;