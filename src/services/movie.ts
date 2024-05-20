import { Server } from "@/constants/server.constant"

export async function getMovies() {
    const res = await fetch(`${Server.URL}/movie`, { method: 'GET' })
    return await res.json()
}

export async function getMoviesByGenre() {
    const res = await fetch(`${Server.URL}/movie/moviesbygenres`, { method: 'GET' })
    return await res.json();
}
