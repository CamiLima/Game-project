import axios from "axios";


export default axios.create({
    baseURL: 'https://valorant-api.com/v1',
    params:{
        key: '9EDBB66DDAF03A61'
    }
})