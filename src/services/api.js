import axios from "axios";

const api = axios.create({
    baseURL: "https://web2api.herokuapp.com/",
    crossDomain : true,
    withCredentials: true //This need to be done in orde to send cookies to the backend application
  });
  
export default api;