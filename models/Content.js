import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
    emailOwner: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true }
});

const Content = mongoose.model('Content', contentSchema);

export default Content;