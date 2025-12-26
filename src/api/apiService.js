import axios from "axios";

// Create API
export const API = axios.create({
  baseURL: "https://dummyjson.com",
});
