import Axios from "axios";

const request = Axios.create({
  baseURL:"/",
  timeout:5000

})

export default request
