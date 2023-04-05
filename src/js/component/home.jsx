import React from "react";
import { useState } from "react";
import '../../styles/index.css';

//create your first component
const ToDoList = () => {

    const [currentTask, setCurrentTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleKeyDown = (e) => {
        if (e.keyCode === 13 && currentTask !== "") {
            setTasks([...tasks, currentTask]);
            setCurrentTask("");
        }
    }

    return (
        <div className="container-fluid">
            <div className=" d-flex header m-3 justify-content-center">
                <h1>Reminders</h1>
            </div>
            <div className="d-flex input m-4 justify-content-center">
                <input type="text" onChange={(e) => setCurrentTask(e.target.value)} onKeyDown={handleKeyDown} className="taskInput" placeholder="What needs to be done?"/>
            </div>
            <div className="d-flex button-container justify-content-center">
                <button onClick={() => setTasks([...tasks, currentTask])} type="button" className={`button ${currentTask.length == 0 && "d-none"}`}>Remind me !</button>
            </div>
            <div className="list m-4">
                <ul className="list-group">
                    {tasks.map((t) => (
                        <li class="list-group-item">{t} - {t.length}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ToDoList;