import { TaskRow } from "./TaskRow";

const TaskTable = ({ tasksItems, toggleTaskDone, showCompelted = false}) => {

    const tableRows = (doneValue) => {
        return (
            tasksItems
            .filter(task => task.done === doneValue)
            .map((task, index) => {
                    return (
                        <TaskRow task={task} key={index} toggleTaskDone={toggleTaskDone} />
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
                    tableRows(showCompelted)
                }
            </tbody>
        </table>
    )
}

export default TaskTable;