import mongoose from "mongoose";

// Define the schema for a Todo
const todoSchema = new mongoose.Schema({
    title: { type: String, required: true }, // Title of the todo, required field
    description: { type: String, required: true }, // Description of the todo, required field
    completed: { type: Boolean, default: false }, // Completion status, default is false
});


// Create a Todo model using the schema
const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
