import axios from "axios";

const API_URL = "http://localhost:6969/";

export const register = (firstname: string, lastname:string, invitecode:string, email: string, password: string) => {
  return axios.post(API_URL + "Register", {
    firstname,
    lastname,
    invitecode,
    email,
    password,
  });
};

export const login = (email: string, password: string) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    });
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      // console.log("adsfasf",response.data);
      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) 
    return JSON.parse(userStr);
  return null;
};
