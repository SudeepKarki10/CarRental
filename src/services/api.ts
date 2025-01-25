import axios, { InternalAxiosRequestConfig } from "axios";

const API_URL = "http://localhost:5000/api";

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add auth token to requests
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Cars API
export const getCars = async () => {
  const response = await api.get("/cars");
  return response.data;
};

export const getCarById = async (id: string) => {
  const response = await api.get(`/cars/${id}`);
  return response.data;
};

// Auth API
export const registerUser = async (userData: {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await api.post("/auth/register", userData);
  return response.data;
};

export const loginUser = async (userData: {
  email: string;
  password: string;
}) => {
  const response = await api.post("/auth/login", userData);
  return response.data;
};

export default api;
