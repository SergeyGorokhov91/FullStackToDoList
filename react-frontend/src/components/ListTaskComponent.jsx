import React, {useEffect, useState} from 'react';
import {getTasks, deleteTaskById, updateTaskById, getSearchedTasks} from "../services/TaskService";
import moment from "moment";
import { useNavigate } from 'react-router-dom';

function ListTaskComponent({searchText}) {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if(searchText && searchText.length > 0) {
      getSearchedTasks(searchText).then((response) => {
        setTasks(response.data)
      })
    }else {
      getTasks().then((response) => {
        setTasks(response.data);
      });
    }
  }, [searchText]);

  const addTask = () => {
    navigate("/add-task/_add");
  };

  const editTask = (id) => {
    navigate(`/add-task/${id}`);
  };

  const deleteTask = (id) => {
    deleteTaskById(id).then(() => {
      setTasks(tasks.filter((task) => task.id !== id));
    });
  };

  function viewTask(id) {
    navigate(`/view-task/${id}`);
  }

  function toggleTaskSelection(task) {
    task.isaDone = !isTaskSelected(task);
    updateTaskById(task,task.id).then(() => {
        navigate("/tasks")
    })
  }

  function isTaskSelected(task) {
    return task.isaDone;
  }

  function buttonsSelectionRelative(task) {
    if (!isTaskSelected(task)) {
      return (
          <button
            onClick={() => editTask(task.id)}
            className="btn btn-info"
            style={{ marginLeft: "10px" }}
          >
            Update
          </button>
      );
    } else {
      return (
          <button
            onClick={() => deleteTask(task.id)}
            className="btn btn-danger"
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
      );
    }
  }

  return (
    <div>
      <h2 className="text-center">Task List</h2>
      <div className="row">
        <div className="pl-0 pb-2">
          <button className="btn btn-primary" onClick={addTask}>
            Add Todo Task
          </button>
        </div>
      </div>

      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
          <tr>
            <th>Task</th>
            <th className="time-col">Do until</th>
            <th className="action-col">Actions</th>
          </tr>
          </thead>
          <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={isTaskSelected(task)}
                    onChange={() => toggleTaskSelection(task)}
                  />
                  <span
                    style={{
                      textDecoration: isTaskSelected(task)
                        ? "line-through"
                        : "none",
                      paddingLeft: "5px",
                    }}
                  >
                      {task.taskText}
                    </span>
                </div>
              </td>
              <td>
                  <span className="date-style">
                    {task.endDate
                      ? moment.utc(task.endDate).local().format("DD MMM YY ")
                      : "-- --- --"}
                  </span>
                <br />
                <span className="time-style">
                    {task.endDate
                      ? moment.utc(task.endDate).local().format("HH:mm")
                      : "-- --"}
                  </span>
              </td>
              <td>
                <button
                  onClick={() => viewTask(task.id)}
                  className="btn btn-info"
                >
                  View
                </button>
                {buttonsSelectionRelative(task)}
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListTaskComponent;