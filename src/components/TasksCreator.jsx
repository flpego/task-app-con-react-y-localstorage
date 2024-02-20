import { useState } from "react";

import React from 'react'

function TasksCreator({createNewTask}) {
    const [newTaskTitle, setNewTaskTitle] = useState("")

    const handleChange = (e) => {
  
      setNewTaskTitle(e.target.value);
  
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (newTaskTitle === "") {
        alert("por favor, llene el formulario con datos validos")
      }
      createNewTask(newTaskTitle)
      setNewTaskTitle("");
    }
    return (
        <div className="task-creator">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter a new Task" onChange={handleChange} autoComplete="off" value={newTaskTitle} />
                <button>Add</button>
            </form>
        </div>
    )
}

export default TasksCreator;