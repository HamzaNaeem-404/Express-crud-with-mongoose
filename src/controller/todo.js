import Todo from "../model/todo.js";

const todoController = {
    getAllTodos: async (req, res) => {
        try {
            const todos = await Todo.find(); // Retrieve all Todos from the database
            res.json(todos);
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    },
        getSpecificTodo: async (req,res)=>{
        const id = req.params.id;
        const todos = await Todo.findById(id)
        if(todos){
            return res.status(200).json({success: true, data: todos});
        }
        else{
            return res.status(404).json({success: false, data: "No  To item Found with this ID"});
        }
    },
    
    createTodo: async (req, res) => {
        const { title, description } = req.body;
        try {
            const newTodo = {
                title,
                description,
            } // Create a new Todo object
            await Todo.create(newTodo); // Save the new Todo to the database
            res.status(201).json(newTodo); // Respond with the created Todo
        } catch (error) {
            res.status(400).json({ error: "Invalid data" });
        }
    },

      updateTodo: async (req, res) => {
        const {id} = req.params;
        const { title, description } = req.body;
        try{
            const todo = await Todo.findByIdAndUpdate(id,
                {title:title, description:description})

            if (!todo) {   
                return res.status(404).json("Unable to update");
            }
          
            res.json("Updated");

        }catch(err){
        res.status(500).json({ error: "Internal server error" });
        console.log(err);
    }
   },

        deleteTodo: async (req, res) => {

        const { id } = req.params;
        try{
            const todo=await Todo.findByIdAndDelete(id);

            if(!deleteTodo){
                return res.status(404).json({ error: "Todo not found" });
            }
            res.json(deleteTodo);
        }
        catch(err){
            res.status(500).json({ error: "Internal server error" });
        }
    },

    updateStatus:async (req, res)=>{
        const taskId=req.params.id;

            try{
                const Found_Task=await Todo.findById(taskId);
              if(!Found_Task)
              {
                return res.status(404).json({ error: "Todo not found" });
              }
                if(Found_Task.completed==true){
                    Found_Task.completed=false;
                }
                else{
                    Found_Task.completed=true;
                }

                Found_Task.save();
                res.json(Found_Task);

            }
            catch(err){
                res.status(500).json({ error: "Internal server error" });
            }
    }
     
    
};

export default todoController;
