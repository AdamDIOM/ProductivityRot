import React, { useState } from 'react';
import TaskTable from './TaskTable';
import TaskForm from './TaskForm';
import '../styles/app.css';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [points, setPoints] = useState(0);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const completeTask = (task) => {
        setTasks(tasks.map(t => t.id === task.id ? { ...t, status: 'completed' } : t));
        setPoints(points + task.points);
    };

    return (
        <div className="app">
            <h1>Productivity App</h1>
            <TaskForm addTask={addTask} />
            <TaskTable tasks={tasks} completeTask={completeTask} />
            <div className="points">
                Total Points: {points}
            </div>
        </div>
    );
};

export default App;