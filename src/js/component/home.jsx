import React from "react";
import { useState } from "react";
import '../../styles/index.css';
import {AiOutlineDelete} from 'react-icons/ai';

//create your first component
const ToDoList = () => {

    const [currentTask, setCurrentTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const removeItem = (taskId) => {
        const newTasks = tasks.filter( (t, index) => index !== taskId );
        setTasks(newTasks);
    }

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
            <div className="inputbox">
            <input required="required" type="text" onChange={(e) => setCurrentTask(e.target.value)} onKeyDown={handleKeyDown}/>
                 <span><b>What needs to be done?</b></span>
             <i></i>
</div>
        </div>
        <div className="d-flex button-container flex-column align-items-center">
            <button onClick={() => setTasks([...tasks, currentTask])} type="button" className={`button ${currentTask.length === 0 && "d-none"}`}>
                Remind me !
            </button>
            {tasks.length === 0 && (
                <div className="temporal-title">
                    <h2>No tasks yet. Start adding some!</h2>
                </div>
            )}
        </div>
        {tasks.length !== 0 && (
            <div className="list m-4">
                <ul className="list-group">
                    {tasks.map((t, index) => (
                        <li key={index} className="list-group-item"> {t} - <strong>{t.length}</strong> <AiOutlineDelete onClick={(event)=>{
                            removeItem(index);
                        }} className="icono-task"/> 
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </div>
);
}

export default ToDoList;