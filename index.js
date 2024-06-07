const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
app.use(cors());
app.use(express.json());// req.body

// routes //

//create a table task
app.post("/task",async(req,res)=>{
try {

     const {id} = req.body;
    const {t_name} = req.body;
    const {t_course} = req.body;

    const newTask = await pool.query(
        "INSERT INTO task (t_name,t_course,id) VALUES($1,$2,$3) RETURNING *",
        [t_name,t_course,id]

    );

    res.json(newTask.rows[0]);

} catch (err) {
    console.error(err.message);
}
})
// get all table data

app.get("/tasks",async(req,res)=>{

    try {
        const allTasks = await pool.query("SELECT * FROM task");
        res.json(allTasks.rows);
        
    } catch (error) {
        console.error(err.message);
    }
});
//get a particular table data

app.get("/tasks/:id",async(req,res)=>{

    try{
    const {id} = req.params;
    

    const tasks = await pool.query("SELECT * FROM task WHERE id=$1",[id]);

    res.json(tasks.rows[0]);

}catch (err) {

        console.error(err.message);
        
    }
});
//update a table of task
app.put("/tasks/:taskId", async (req, res) => {
    try {
      const { taskId } = req.params;
      const { t_name, t_course } = req.body;
  
      const Update = await pool.query(
        "UPDATE task SET t_name=$1, t_course=$2 WHERE id=$3",
        [t_name, t_course, taskId]
      );
  
      res.json("Task was updated");
  
    } catch (err) {
      console.error(err.message);
     
    }
  });
  
  


//delete a table

app.delete("/tasks/:id", async(req,res)=>{

    try {
 const {id} = req.params;
 
 const deleteTask = await pool.query("DELETE FROM task WHERE id=$1",
    [id]
 )
 res.json("Deleted successfully..!!!");

    } catch (err) {

        console.error(err.message);
    }
})



app.listen(5000,()=>

 {
    console.log("server has started on port number 5000");

});
