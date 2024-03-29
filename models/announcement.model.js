import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    profilePic: {
        type: Date,
        required: true
    },
    
});


const Announcement = mongoose.model("Announcement", announcementSchema);
export default Announcement;