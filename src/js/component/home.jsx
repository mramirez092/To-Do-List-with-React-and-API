import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const ToDoList = () => {
	return (
			<div className="container-fluid">
				<div className=" d-flex header m-3 justify-content-center">
					<h1>Reminders</h1>
				</div>
				<div className="input m-4">
				<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="What needs to be done?"/>
				</div>
				<div className="list m-4">
				<ul class="list-group">
  					<li class="list-group-item">An item</li>
  					<li class="list-group-item">A second item</li>
  					<li class="list-group-item">A third item</li>
  					<li class="list-group-item">A fourth item</li>
  					<li class="list-group-item">And a fifth one</li>
				</ul>
				</div>
			</div>
	);
};

export default ToDoList;
