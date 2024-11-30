import { useState } from 'react';
import './App.css';

function App() {

  const [completedJobs, setCompletedJobs] = useState([
    {"type": "skibidi", "points": 1, "statement": ""},
    {"type": "sigma", "points": 2, "statement": ""}
  ])

  const multipliers = {
    "sigma": 3,
    "skibidi": 1,
    "ohio": -1
  }

  return (
    <div className="App">
      // user enters a statement
      // statement is checked against fact list
      // if there's a point to be earned, it's added to completedJobs
      {completedJobs.map((job) => (
                <p>{job.points} {job.type} points! ({job.points * multipliers[job.type]} aura points)</p>
      ))}

    </div>
  );
}

export default App;
