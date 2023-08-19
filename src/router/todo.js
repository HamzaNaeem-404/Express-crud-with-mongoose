import express from "express";
import todoController from "../controller/todo.js";

const todoRouter = express.Router();

todoRouter.get("/todos", todoController.getAllTodos); 

todoRouter.get("specific/:id", todoController.getSpecificTodo);


todoRouter.post("/todos", todoController.createTodo); // Create a Todo

todoRouter.post("/update/:id", todoController.updateTodo); // Update a Todo

todoRouter.get("/delete/:id", todoController.deleteTodo);

todoRouter.get("/todos/update-status/:id",todoController.updateStatus); // Update a Todo  status

export default todoRouter;
