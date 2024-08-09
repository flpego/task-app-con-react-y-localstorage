import { useEffect, useState } from "react";
import TasksCreator from "./components/TasksCreator";
import TaskTable from "./components/TaskTable";
import { ShowTaskControl } from "./components/ShowTaskControl";

import "primereact/resources/themes/mdc-light-deeppurple/theme.css";

import 'primereact/resources/primereact.min.css';
import "./styles/background-svg.css"
import "./App.css"

function App() {
  const [tasksItems, setTasksItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const createNewTask = (newTaskTitle) => {
    if (!tasksItems.find(task => task.name === newTaskTitle)) {
      setTasksItems([...tasksItems, { name: newTaskTitle, done: false }]);
    }
  };

  const toggleTaskDone = (task) => {
    setTasksItems(
      tasksItems.map((item) => (item.name === task.name ? { ...item, done: !item.done } : item))
    );
  };

  const deleteAllTasksDone = () => {
    setTasksItems(tasksItems.filter(task => !task.done));
    setShowCompleted(false);
  };

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  return (
    <div className="app background-svg">
      <div className="d-flex-center width-70">
        <TasksCreator createNewTask={createNewTask} />
      </div>
      <div className="d-flex-center width-70">
        <TaskTable tasksItems={tasksItems} toggleTaskDone={toggleTaskDone} />
      </div>
      <h2>Tasks completed</h2>
      <div className="d-flex-center width-70">
        <ShowTaskControl
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          deleteAllTasksDone={deleteAllTasksDone}
        />
      </div>
      <div className="d-flex-center width-70">
        {showCompleted && (
          <TaskTable tasksItems={tasksItems} toggleTaskDone={toggleTaskDone} showCompleted={showCompleted} />
        )}
      </div>
    </div>
  );
}

export default App;
