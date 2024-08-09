import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


function TasksCreator({ createNewTask }) {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleChange = (e) => {
    setNewTaskTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTaskTitle === "") {
      alert("por favor, llene el formulario con datos validos");
      return;
    }
    createNewTask(newTaskTitle);
    setNewTaskTitle("");
  }

  return (
    <div className="task-creator">
      <form onSubmit={handleSubmit}>
        <InputText value={newTaskTitle} onChange={handleChange} placeholder="Enter a new Task" autoComplete="off" />
        <Button label="Add" icon="pi pi-plus" />
      </form>
    </div>
  )
}

export default TasksCreator;
