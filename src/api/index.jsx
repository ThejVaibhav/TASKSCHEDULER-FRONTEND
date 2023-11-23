import axios from "axios";

const api = axios.create({
  baseURL: "https://task-scheduler-backend.onrender.com/",
});
export default api;
