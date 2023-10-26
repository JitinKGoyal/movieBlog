import axios from "axios"
import { baseUrl } from './../config';

export const getAllImages = async (query, offset, limit) => {

    try {
        const response = await axios.get(`${baseUrl}/movie/images/${query}/${offset}/${limit}`)
        return response.data;
    } catch (error) {
        console.log(error)
    }

}   
