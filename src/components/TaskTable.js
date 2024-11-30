import React from 'react';
import '../styles/table.css';

const TaskTable = ({ tasks, completeTask }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Keyword</th>
                <th>Points</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {tasks.map(task => (
                <tr key={task.id}>
                    <td>{task.keyword}</td>
                    <td>{task.points}</td>
                    <td>{task.status}</td>
                    <td>
                        {task.status === 'pending' && (
                            <button onClick={() => completeTask(task)}>Complete</button>
                        )}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default TaskTable;