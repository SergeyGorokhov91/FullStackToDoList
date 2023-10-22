import React, {useState} from 'react';
import moment from "moment";
import {useNavigate} from "react-router-dom";
import {createTask} from "../services/TaskService";

function CreateTaskComponent() {
  const [text,setText] = useState("");
  const [date,setDate] = useState("");
  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const saveTask = (event) => {
    event.preventDefault();
    let task = {
      taskText:text,
      addDate: moment().format(),
      endDate:date? moment(date).format():""
    }
    createTask(task).then(() => {
      navigate("/tasks")
    });
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
                    value={date}
                  />
                </div>
                <button className="btn btn-success" onClick={saveTask}>Save</button>
                <button className="btn btn-danger" onClick={cancel} style={{marginLeft:"10px"}}>Cancel</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTaskComponent;