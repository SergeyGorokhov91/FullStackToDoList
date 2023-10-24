import React, {useEffect, useState} from 'react';
import {withParams} from "../services/withParams";
import {deleteTaskById, getTaskById, getTasks} from "../services/TaskService";
import moment from "moment/moment";
import {useNavigate} from "react-router-dom";

function ViewTaskComponent(props) {
  const [task,setTask] = useState([]);
  let {id} = props.params;

  useEffect(()=>{
    getTaskById(id).then((res) => {
      setTask(res.data);
    })
  },[id])


  const [tasks,setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(()=> {
    getTasks().then(response => {
      setTasks(response.data);
    });
  },[]);

  const editTask = (id) => {
    navigate(`/add-task/${id}`)
  }

  const deleteTask = (id) => {
    deleteTaskById(id).then(() => {
      setTasks(tasks.filter(task => task.id !== id));
    });
  }

  function listTask() {
    navigate(`/tasks`)
  }


  return (
    <div>
      <div className="card col-md-10 offset-md-1">
        <h3 className="text-center">View Task details</h3>
        <div className="row">
          <label></label>
          <div style={{fontSize:25, margin:10}}>{task.taskText}</div>
        </div>
        <div className="row" >
          <div className="col-auto"><b>add time: </b></div>
          <div className="col-auto  date-style">
           {task.addDate ? moment.utc(task.addDate).local().format("DD MMM YY ") : "Error"}
          </div>
          <div className="col-auto  time-style">
            {task.addDate ?moment.utc(task.addDate).local().format("HH:mm"):"not found"}
          </div>
          <div className="col-auto"><b>complete before: </b></div>
          <div className="col-auto date-style">
            {task.endDate ? moment.utc(task.endDate).local().format("DD MMM YY ") : "-- --- --"}
          </div>
          <div className="col-auto time-style">
            {task.endDate ?moment.utc(task.endDate).local().format("HH:mm"):"-- --"}
          </div>
        </div>
        <div style={{margin:10}}>
          <button onClick={()=> editTask(task.id)} className="btn btn-info">Update</button>
          <button onClick={()=> listTask(task.id) } className="btn btn-info" style={{marginLeft:"10px"}}>Back</button>
          <button onClick={()=> deleteTask(task.id)} className="btn btn-danger" style={{marginLeft:"10px"}}>Delete</button>

        </div>
      </div>
    </div>
  );
}

export default withParams(ViewTaskComponent);