import { Checkbox } from 'primereact/checkbox';


export const TaskRow = ({ task, toggleTaskDone }) => {
  return (
    <tr>
      <td>{task.name}</td>
      <td>
        <Checkbox checked={task.done} onChange={() => toggleTaskDone(task)} />
      </td>
    </tr>
  )
}
