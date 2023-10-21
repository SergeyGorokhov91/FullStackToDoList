import React, {useEffect, useState} from 'react';
import TaskService from "../services/TaskService";

function ListTaskComponent() {
  const [tasks,setTasks] = useState([]);

  useEffect(()=> {
    TaskService().then(response => {
      setTasks(response.data);
      console.log(response.data)
    });
  },[]);

  return (
    <div>
      <h2 className="text-center">Task List</h2>
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
                    <td>{task.addTime}</td>
                    <td>{task.endTime}</td>
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