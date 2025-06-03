import axios from "axios";

export const stateApi = axios.create({
  baseURL: "http://localhost:3000",
});
