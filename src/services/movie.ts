import { Server } from "@/constants/server.constant"

export async function getMovies() {
    const res: any = await fetch(`${Server.URL}/movie`, { method: 'GET' })
        .then(response => response.json())
        .then(json => json)
    return await res
}

export async function getMoviesByGenre() {
    const res = await fetch(`${Server.URL}/movie/moviesbygenres`, { method: 'GET' })
        .then(response => response.json())
        .then(json => json)
        .catch(err => console.log(err))
    return await res
}
