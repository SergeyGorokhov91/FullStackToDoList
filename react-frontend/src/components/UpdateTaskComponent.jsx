import React, {useEffect, useState} from 'react';
import moment from "moment";
import {useNavigate} from "react-router-dom";
import {getTaskById} from "../services/TaskService";
import {withParams} from "../services/withParams";

function UpdateTaskComponent(props) {
  const [text,setText] = useState("");
  const [endDate,setEndDate] = useState("");
  const navigate = useNavigate();
  let {id} = props.params;


  useEffect(() => {
    getTaskById(id).then(r => {
        let task = r.data;
        setText(task.taskText);
        setEndDate(task.endDate ? moment.utc(task.endDate).local().format("YYYY-MM-DD") : '');
      })
    },[id])

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const updateTask = () => {
    let task = {
      taskText:text,
      endDate:endDate? moment(endDate).format():""
    }
    console.log("task => "+JSON.stringify(task))
  }

  function cancel() {
    navigate("/tasks")
  }

  return (
    <div>
      <div className="container">
        <div className="row ">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text center">Add task</h3>
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
                <button className="btn btn-success" onClick={updateTask}>Update</button>
                <button className="btn btn-danger" onClick={cancel} style={{marginLeft:"10px"}}>Cancel</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withParams(UpdateTaskComponent);
