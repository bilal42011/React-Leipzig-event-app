import axios from "axios";

const instance = axios.create({
    baseURL: 'https://nodejs-leipzig-scraping.herokuapp.com'
  });
  export default instance;