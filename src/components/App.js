import React, {useEffect, useState} from 'react';
import TaskTable from './TaskTable';
import TaskForm from './TaskForm';
import '../styles/app.css';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [points, setPoints] = useState(0);
    const [database, setDatabase] = useState([]);

    useEffect(() => {
        fetch('https://script.google.com/macros/s/AKfycbx4eRJ9XFDOrm0ZbUl3gCSzWsEV6k7IwoV0ARFoBNOenXtE92kE1QmfAkCmpvyOw24H/exec')
            .then(response => response.json())
            .then(data => setDatabase(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const updateTaskStatus = (task, newStatus) => {
        const updatedTasks = tasks.map(t => {
            if (t.id === task.id) {
                const pointChange = newStatus === 'completed' ? t.points : -t.points;
                setPoints(points + pointChange);
                return { ...t, status: newStatus };
            }
            return t;
        });
        setTasks(updatedTasks);
    };

    return (
        <div className="app">
            <h1>Productivity App</h1>
            <TaskForm addTask={addTask} database={database} />
            <TaskTable tasks={tasks} updateTaskStatus={updateTaskStatus} />
            <div className="points">
                Total Aura Points: {points}
            </div>
        </div>
    );
};

export default App;