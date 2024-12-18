import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        required: true,
        default: "https://cdn.sanity.io/images/qyzm5ged/production/4fe5252b1031f0520fc5a58fc109749e01972381-2138x1200.jpg/Thumbnail-v1-(4).jpg?fm=webp"
    },
    price: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    createdBy: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const Courses = mongoose.model("Courses", courseSchema);