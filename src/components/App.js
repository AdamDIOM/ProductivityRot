import React, {useEffect, useState} from 'react';
import TaskTable from './TaskTable';
import TaskForm from './TaskForm';
import '../styles/app.css';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [points, setPoints] = useState(0);
    const [database, setDatabase] = useState([]);

    useEffect(() => {
        fetch('https://script.googleusercontent.com/macros/echo?user_content_key=P0gsWPmAUlwiuSVaHhznwJUaL_B671vV28biRasMPXpJKYHGtE1JraTzEh1uUbb3RSL23sbGMtcMDLcxQXuhLtI_lE2c3kNom5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLJaPKME-1Bbfc3BSBvXxIFvGu7U_lQIV_FZtv9pKpPVJl-wxy2StlV7XR0nzdtlzWV1_wnaCKvoKu_x5bAXfSmZYpEGaI4Z6A&lib=MMOg3KJ6Ab9Hrabe-yKpfzdoBno9WCgsY')
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
                Total Points: {points}
            </div>
        </div>
    );
};

export default App;