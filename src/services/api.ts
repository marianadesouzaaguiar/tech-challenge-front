import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000", // Substitua pelo URL correto do backend
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;


