import { useEffect, useState } from "react";
import TasksCreator from "./components/TasksCreator";
import TaskTable from "./components/TaskTable";
import { ShowTaskControl } from "./components/ShowTaskControl";


function App() {

  const [tasksItems, setTasksItems] = useState([]);
  const [showCompelted, setShowCompelted] = useState()

  const createNewTask = (newTaskTitle) => {
    setTasksItems([...tasksItems, { name: newTaskTitle, done: false }])
  }

  const toggleTaskDone = (task) => {
    setTasksItems(
      tasksItems.map((item) => (item.name == task.name ? { ...item, done: !item.done } : item))
    )
  }

  useEffect(() => {
    let data = localStorage.getItem("tasks");

    if (data) {

      setTasksItems(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems))
  }, [tasksItems])


  return <>
    <div>
      <TasksCreator createNewTask={createNewTask} />
      <TaskTable tasksItems={tasksItems} toggleTaskDone={toggleTaskDone} />
      <ShowTaskControl setShowCompelted={(checked) => setShowCompelted(checked)}/>
      {showCompelted && (
        <TaskTable tasksItems={tasksItems} toggleTaskDone={toggleTaskDone} showCompelted={showCompelted} />
      )
      }
    </div>
  </>
}



export default App;