import React, { useState } from 'react';

const TaskForm = ({ addTask, database }) => {
    const [task, setTask] = useState({ keyword: '', points: 0, status: 'pending' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleKeywordChange = (e) => {
        const keyword = e.target.value;
        const matchedEntry = database.find(entry => entry.Keyword.toLowerCase() === keyword.toLowerCase());
        const points = matchedEntry ? matchedEntry.Number : 0;
        setTask({ ...task, keyword, points });
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
                onChange={handleKeywordChange}
                placeholder="Task Keyword"
                required
            />
            <input
                type="number"
                name="points"
                value={task.points}
                onChange={handleChange}
                placeholder="Points"
                readOnly
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;