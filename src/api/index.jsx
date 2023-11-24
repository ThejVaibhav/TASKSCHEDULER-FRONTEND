import axios from "axios";

const api = axios.create({
  baseURL: "https://task-scheduler-backend.onrender.com/api/",
});
export default api;
