import React, { Fragment, useEffect, useState } from "react";
import Edit from "./Edit";

function ListTask() {
  const [tasks, setTasks] = useState([]);

  // delete task function
  const deleteTask = async (id) => {
    try {
      const confirmation = window.confirm("Are you sure you want to delete this task?");
      if(confirmation){
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "DELETE"
      });
      setTasks(tasks.filter(task => task.id !== id));
      alert("Task was deleted successfully!");
    } 
  }catch (err) {
      console.error(err.message);
    }
  };

  const getTasks = async () => {
    try {
      const response = await fetch("http://localhost:5000/tasks");
      const jsonData = await response.json();
      setTasks(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <Fragment>
      <table className="table bt-5 text-center">
        <thead>
          <tr>
            <th>id</th>
            <th>t_name</th>
            <th>t_course</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.t_name}</td>
              <td>{task.t_course}</td>
              <td><Edit task={task}/></td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteTask(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}

export default ListTask;
