import axios from "axios";
import { ACCESS_TOKEN_KEY } from "../constants/accessToken";
import { history } from "../history";
import { BASE_URL } from "./constants/baseURL";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  validateStatus: (status) => status < 500,
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log(response.status);
    if (response.status === 401 || response.status === 403) {
      history.push("/unauthorized");
      window.location.reload();
    }
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error.response);
  }
);
