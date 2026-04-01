import axios from "axios";

// Dùng relative path để hoạt động cả dev và Docker
// Dev: /api/ → proxy đến http://localhost:53216/api/
// Docker: /api/ → Nginx route đến API service
export const axiosInstance = axios.create({
  baseURL: "/api/",
  headers: {
    "Content-Type": "application/json",
  },
});
