import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
    const [task, setTask] = useState({ keyword: '', points: 0, status: 'pending' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({ ...task, id: Date.now() });
        setTask({ keyword: '', points: 0, status: 'pending' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="keyword"
                value={task.keyword}
                onChange={handleChange}
                placeholder="Task Keyword"
                required
            />
            <input
                type="number"
                name="points"
                value={task.points}
                onChange={handleChange}
                placeholder="Points"
                required
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;