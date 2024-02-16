import { useState } from "react";
import TasksCreator from "./components/TasksCreator";


function App() {

  const [tasksItems, setTasksItems] = useState([
    {
      name: "tarea",
      done: false
    },
    {
      name: "tarea",
      done: false
    },
    {
      name: "tarea",
      done: false
    }
  ]);

  const createNewTask = (taskName) => {
    setTasksItems([...tasksItems, {name: taskName, done: false}])
  }


  return <>
    <div>
      <TasksCreator createNewTask={createNewTask}></TasksCreator>
      <table>
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Done?</th>
          </tr>
        </thead>
        <tbody>
        {tasksItems.map((task, index) => {
        return (
        <tr key={index}>
          <td>{index} - {task.name}</td>
          <td>{task.done === true ? "Task Ended" : "Task to end"} </td>
        </tr>
        )
      })}
        </tbody>
      </table>
    </div>
  </>
}



export default App;