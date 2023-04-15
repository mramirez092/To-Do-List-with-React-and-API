import React, { useEffect } from "react";
import { useState } from "react";
import '../../styles/index.css';
import {AiOutlineDelete} from 'react-icons/ai';
import { element } from "prop-types";

//create your first component
const ToDoList = () => {

    const [currentTask, setCurrentTask] = useState("");
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getAllTasks();
    }, []);

    const removeItem = (taskId) => {
        const newTasks = tasks.filter( (t, index) => index !== taskId );
        setTasks(newTasks);
    }

    const handleKeyDown = (e) => {
        if (e.keyCode === 13 && currentTask !== "") {
            setTasks([...tasks, currentTask]);
            handleAddTask("");
        }
    }

    //FUNCION GET//

    const getAllTasks = () => {
        fetch('https://assets.breatheco.de/apis/fake/todos/user/mramirez')
        .then((response) => response.json())
		.then((data) => {
			setTasks(data)
			console.log(data)})
		.catch(error => console.log(error))
    }

    //FUNCION PUT//

    const handleAddTask = () => {
        const data = tasks.concat({
            "label": currentTask,
            "done": false
        });
        fetch('https://assets.breatheco.de/apis/fake/todos/user/mramirez', {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        getAllTasks(); 
    })
    .catch(error => console.log(error));
    }

    //FUNCION DELETE//

    const deleteElement = (element) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let eliminar = tasks.filter(task => task !== element)
        console.log(eliminar);

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: JSON.stringify(eliminar),
            redirect: 'follow'
        };

        fetch('https://assets.breatheco.de/apis/fake/todos/user/mramirez', requestOptions)
            .then(response => response.json())
            .then(result => getAllTasks())
            .catch(error => console.log('error', error));
    }



    return (
    <div className="container-fluid">
        <div className=" d-flex header m-3 justify-content-center">
            <h1>Reminders</h1>
        </div>
        <div className="d-flex input m-4 justify-content-center">
            <div className="inputbox">
            <input required="required" type="text" onChange={(e) => setCurrentTask(e.target.value)} onKeyDown={handleKeyDown} value={currentTask}/>
                 <span><b>What needs to be done?</b></span>
             <i></i>
    </div>
        </div>
        <div className="d-flex button-container flex-column align-items-center">
    
            <button onClick={handleAddTask}>Add Item</button>
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
                        <li key={index} className="list-group-item"> 
                            {t.label}
                            
                            <AiOutlineDelete 
                            onClick={() => deleteElement(t)} 
                            className="icono-task" /> 

                        </li>
                    ))}
                </ul>
            </div>
        )}
    </div>
);
}

export default ToDoList;