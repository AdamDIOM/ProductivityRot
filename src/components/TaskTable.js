import React from 'react';
import '../styles/table.css';

const TaskTable = ({ tasks, updateTaskStatus }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Task</th>
                <th>Points</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            {tasks.map(task => (
                <tr key={task.id}>
                    <td>{task.keyword}</td>
                    <td>
                        {task.types.map((taskType, index, list) => (
                            <span>{task.pointsarr[index]} {taskType} points{index != list.length-1 ? <span>, </span>: <span> </span>}</span>
                        ))}
                        ({task.points} aura points)
                    </td>
                    <td>
                        <select
                            value={task.status}
                            onChange={(e) => updateTaskStatus(task, e.target.value)}
                        >
                            <option value="pending">Pending</option>
                            {/* <option value="ongoing">Ongoing</option> */}
                            <option value="completed">Completed</option>
                        </select>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default TaskTable;