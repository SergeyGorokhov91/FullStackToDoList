import React, {useEffect, useState} from 'react';
import moment from "moment";
import {useNavigate} from "react-router-dom";
import {createTask, getTaskById, updateTaskById} from "../services/TaskService";
import {withParams} from "../services/withParams";

function CreateTaskComponent(props) {
  const [text,setText] = useState("");
  const [endDate,setEndDate] = useState("");
  const navigate = useNavigate();
  let {id} = props.params;

  useEffect(() => {
    if(id > 0) {
      getTaskById(id).then(r => {
        let task = r.data;
        setText(task.taskText);
        setEndDate(task.endDate ? moment.utc(task.endDate).local().format("YYYY-MM-DD") : '');
      })
    }
  },[id])

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const saveOrUpdateTask = (event) => {
    event.preventDefault();
    if(id === "_add") {
      let task = {
        taskText:text,
        addDate: moment().format(),
        endDate:endDate? moment(endDate).format():""
      }
      createTask(task).then(() => {
        navigate("/tasks")
      });
    }

    if(id > 0) {
      let task = {
        taskText:text,
        endDate:endDate? moment(endDate).format():""
      }
      updateTaskById(task, id).then(() => {
        navigate("/tasks")
      })
    }
  }

  function cancel() {
    navigate("/tasks")
  }

  const getTitle = () =>{
    if(id > 0) {
      return <h3 className="text center">Update task</h3>
    }
    if(id === "_add"){
      return <h3 className="text center">Add task</h3>
    }
  }

  return (
    <div>
      <div className="container" style={{marginTop: "15px"}}>
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {getTitle()}
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Text of todo task:</label>
                  <textarea
                    className="form-control mb-3"
                    rows="3"
                    onChange={handleTextChange}
                    value={text}
                  />
                </div>
                <div className="form-group">
                  <label> Date of completion (not necessary):</label>
                  <input
                    className="form-control mb-3"
                    type="date"
                    onChange={handleDateChange}
                    value={endDate}
                  />
                </div>
                <button className="btn btn-success" onClick={saveOrUpdateTask}>Save</button>
                <button className="btn btn-danger" onClick={cancel} style={{marginLeft:"10px"}}>Cancel</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withParams(CreateTaskComponent);