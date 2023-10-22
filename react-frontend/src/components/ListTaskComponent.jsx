import React, {useEffect, useState} from 'react';
import {getTasks} from "../services/TaskService";
import moment from "moment";
import { useNavigate } from 'react-router-dom';



function ListTaskComponent() {
  const [tasks,setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(()=> {
    getTasks().then(response => {
      setTasks(response.data);
    });
  },[]);

  const addTask = () => {
     navigate('/add-task');
  }

  return (
    <div>
      <h2 className="text-center">Task List</h2>
      <div className="row">
        <div className="pl-0">
         <button className="btn btn-primary" onClick={addTask}> Add Todo Task</button>
        </div>
      </div>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Task</th>
              <th>Created</th>
              <th>Do until</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              tasks.map(
                task =>
                  <tr key={task.id}>
                    <td>{task.taskText}</td>
                    <td>
                      <span className="date-style">
                       {task.addDate ? moment.utc(task.addDate).local().format("DD MMM YY ") : "Error"}
                      </span>
                      <br/>
                      <span className="time-style">
                        {task.addDate ?moment.utc(task.addDate).local().format("HH:mm"):"not found"}
                      </span>
                    </td>
                    <td>
                      <span className="date-style">
                        {task.endDate ? moment.utc(task.endDate).local().format("DD MMM YY ") : "-- --- --"}
                      </span>
                      <br/>
                      <span className="time-style">
                        {task.endDate ?moment.utc(task.endDate).local().format("HH:mm"):"-- --"}
                      </span>
                    </td>
                  </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListTaskComponent;