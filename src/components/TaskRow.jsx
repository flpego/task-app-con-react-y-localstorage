import React from 'react'

export const TaskRow = ({task, toggleTaskDone}) => {
    return (
        <tr >
            <td>{task.name}</td>
            <td>
                <input type="checkbox" value={task.done} onChange={() => toggleTaskDone(task)} className='chekbox'/>
            </td>
        </tr>
    )
}
