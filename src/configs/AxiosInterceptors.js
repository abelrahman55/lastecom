import axios from "axios";
import { BASE_URL } from "./AppConfig";

const server = axios.create({
  baseURL: BASE_URL,
  timeout: 6000,
});

// API request interceptor
server.interceptors.request.use(
  async (request) => {
    request.headers.Accept = "application/json";
    request.headers["Content-Type"] = "application/json";

    return request;
  },
  (error) => {
    // Do something with request error here
    // console.log('error', error);
    Promise.reject(error);
  }
);

// API respone interceptor
server.interceptors.response.use(
  (response) => {
    // console.log('response in axiosInterceptor:', response.data);
    console.log(response.data);
    return response;
  },
  async (error) => {
    // Remove token and redirect
    const msg = "there is an error in axiosInterceptor: ";
    if (
      (error.response.status === 400 || error.response.status === 403,
      error.response.status === 401)
    ) {
      // signOut(navigation);
      console.log(msg + "Authentication Fail");
      // alert('Authentication Fail');
      // console.log(msg + 'Please login again');
    }

    if (error.response.status === 404) {
      console.log(msg + "Not Found");
    }

    if (error.response.status === 500) {
      console.log(msg + "Internal Server Error");
    }

    if (error.response.status === 508) {
      console.log(msg + "Time Out");
    }
    console.log("there is an error in axiosInterceptor: " + error);
    return error;
  }
);

export default server;
