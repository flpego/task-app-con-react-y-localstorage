import { TaskRow } from "./TaskRow";

const TaskTable = ({ tasksItems, toggleTaskDone, showCompleted = false}) => {

    const tableRows = (doneValue) => {
        return (
            tasksItems
            .filter(task => task.done === doneValue)
            .map((task) => {
                    return (
                        <TaskRow task={task} key={task.name} toggleTaskDone={toggleTaskDone}/>
                    )
                })

        );
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Tasks</th>
                    <th>Done?</th>
                </tr>
            </thead>
            <tbody>
                {
                    tableRows(showCompleted)
                }
            </tbody>
        </table>
    )
}

export default TaskTable;