import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:3000',
})
export const getVideos = ()=> api.get('/videos').then(res=>res.data);

export const getVideoInfo = (id)=>
api.get(`/videos/${id}`).then((res)=>res.data);