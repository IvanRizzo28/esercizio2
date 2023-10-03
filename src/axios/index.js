import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts/' //https://xkcd.com/614/info.0.json problemi CORS
});

axiosClient.interceptors.request.use(config => {
    config.headers.Accept = 'application/json';
    return config;
});


export default axiosClient;