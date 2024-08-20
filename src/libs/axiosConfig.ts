import { API_URL } from '@/libs/config';
//import { API } from '@/routes/apis';
import axios from 'axios'

const BASE_URL = API_URL;
console.log(BASE_URL)
const Axios = axios.create({
  //withCredentials: true,
  baseURL: BASE_URL,
  headers: {
    "Accept": "application/json",
    //Accept: '*/*',
    "Content-Type": "application/json",
    //'X-Requested-With': 'XMLHttpRequest',
    //'Access-Control-Allow-Credentials':true,
    'Access-Control-Allow-Credentials':false,
    'Access-Control-Allow-Origin': '*'
  }
});

export default Axios;