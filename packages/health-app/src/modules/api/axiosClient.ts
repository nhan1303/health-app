import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptors

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Handle token here
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
