import axios from "axios";

const TASK_API_BASE_URL = "http://localhost:8080/api/v1/tasks";

function getTasks() {
    return axios.get(TASK_API_BASE_URL);
}

function createTask(task) {
    return axios.post(TASK_API_BASE_URL, task);
}

function getTaskById(taskId) {
    return axios.get(TASK_API_BASE_URL+'/'+taskId);
}

export { getTasks,createTask, getTaskById };