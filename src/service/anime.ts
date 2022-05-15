import axios, { AxiosInstance } from "axios";

const client: AxiosInstance = axios.create({
    baseURL: 'https://ghibliapi.herokuapp.com/films'
})

export async function GetAllAnime(limit: number) {
    return await client.get(`?limit=${limit}`)
}

export async function GetAnimeByID(id: string) {
    return await client.get(`/${id}`)
}