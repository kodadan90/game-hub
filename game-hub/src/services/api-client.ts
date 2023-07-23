import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: 'a1d9fc90ccd94370b3b7dc5c7efd0fc7'
    }
})