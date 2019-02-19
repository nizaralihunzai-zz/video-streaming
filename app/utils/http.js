import axios from "axios";

const httpsServer = `https://video.skincoachapp.com/v1/`;
const http = axios.create({
  baseURL: httpsServer,
  timeout: 30000,
});

// http.headers['Access-Control-Allow-Origin'] = '*';


export default http;
