import React, { useState } from 'react';

const TaskForm = ({ addTask, database }) => {
    const [task, setTask] = useState({ keyword: '', points: 0, pointsarr: [], status: 'pending', types: [] });

    const pointsMultiplier = {
        "Ohio": -1,
        "Sigma": 3,
        "Skibidi": 1,
        "Rizz": 0
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleKeywordChange = (e) => {
        const keyword = e.target.value.toLowerCase();
        let points = 0;
        let pointsarr = [];
        const words = keyword.split(' ');
        let types = []
        database.forEach(entry => {
            words.forEach(word => {
                if (word === entry.Keyword.toLowerCase()) {
                    types.push(entry.PointType);
                    pointsarr.push(entry.Number);
                    points += entry.Number * pointsMultiplier[entry.PointType];
                }
            });
        });

        setTask({ ...task, keyword: e.target.value, points, pointsarr: pointsarr, types: types });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({ ...task, id: Date.now() });
        setTask({ keyword: '', points: 0, status: 'pending', pointsarr: [], types: [] });
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