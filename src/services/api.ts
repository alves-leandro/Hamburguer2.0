import axios from "axios";

export const api = axios.create({
  // baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com",
  baseURL: "https://hamburgueria-kenzie-v2.herokuapp.com",
  timeout: 5000,
});
