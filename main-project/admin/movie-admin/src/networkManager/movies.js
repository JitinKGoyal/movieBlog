import axios from "axios"
import { baseUrl } from './../config';

export const getMovies = async (text) => {

    try {
        const response = await axios.get(`${baseUrl}/movie?query=${text}`)
        return response.data;
    } catch (error) {
        console.log(error)
    }

}

export const updateMovie = async (id, movie) => {
    try {
        const response = await axios.put(`${baseUrl}/movie/${id}`, movie)
        return response.data;
    } catch (error) {
        console.log(error)
    }
}