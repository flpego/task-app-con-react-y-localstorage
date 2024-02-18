import { useEffect, useState } from "react";
import TasksCreator from "./components/TasksCreator";
import TaskTable from "./components/TaskTable";
import { ShowTaskControl } from "./components/ShowTaskControl";


function App() {

  const [tasksItems, setTasksItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false)

  const createNewTask = (newTaskTitle) => {
    if (!tasksItems.find(task => task.name === newTaskTitle)) {
      setTasksItems([...tasksItems, { name: newTaskTitle, done: false }]);
    };
  };

  const toggleTaskDone = (task) => {
    setTasksItems(
      tasksItems.map((item) => (item.name == task.name ? { ...item, done: !item.done } : item))
    );
  };

  const deleteAllTasksDone = () => {
    setTasksItems(tasksItems.filter(task => !task.done));
    setShowCompleted(false);
  };

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasksItems(JSON.parse(data))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems))
  }, [tasksItems]);


  return <>
    <div>
      <div className="d-flex-center">

        <TasksCreator createNewTask={createNewTask} />
      </div>
      <div className="d-flex-center">
        <TaskTable tasksItems={tasksItems} toggleTaskDone={toggleTaskDone} />

      </div>
      <div className="d-flex-center">
        <ShowTaskControl
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          deleteAllTasksDone={deleteAllTasksDone}
        />
      </div>


      <div className="d-flex-center">
        {showCompleted && (
          <TaskTable tasksItems={tasksItems} toggleTaskDone={toggleTaskDone} showCompleted={showCompleted} />
        )
        }
      </div>

    </div>
  </>
}



export default App;