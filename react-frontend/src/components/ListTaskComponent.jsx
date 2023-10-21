import React, {useEffect, useState} from 'react';
import TaskService from "../services/TaskService";
import moment from "moment";
import { useNavigate } from 'react-router-dom';


function ListTaskComponent() {
  const [tasks,setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(()=> {
    TaskService().then(response => {
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
                    <td>{moment.utc(task.addTime).format("DD MMM YYYY HH:mm")}</td>
                    <td>{task.endTime ? moment.utc(task.endTime).format("DD MMM YYYY HH:mm"):""}</td>
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