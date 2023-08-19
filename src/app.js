import express from "express";        // Import Express framework
import connectDB from "./config/db.js";
import todoRouter from "./router/todo.js";   // Import todoRouter from the router folder

connectDB();

const app = express();  // Create an instance of the Express application

app.use(express.json()); // Parse JSON request bodies

app.use(todoRouter);   // Use the todoRouter for handling routes

app.use((req, res) => {   // Handle invalid routes with a 404 response
  res.status(404).json({ error: "Not Found" });
});

const port = process.env.PORT || 3000;   // Define the port for the server
app.listen(port, () => {  // Start the server
  console.log(`Listening on port ${port}`);
});
