import { useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';

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
      <p>user enters a statement
      statement is checked against fact list
      if there's a point to be earned, it's added to completedJobs</p>
      {completedJobs.map((job, index) => (
                <p key={index}>{job.points} {job.type} points! ({job.points * multipliers[job.type]} aura points)</p>
      ))}

      {/* <Button onClick={
        setCompletedJobs(completedJobs.push({"type": "ohio", "points": 1, "statement": "pressed button"}))
      }></Button> */}

    </div>
  );
}

export default App;
