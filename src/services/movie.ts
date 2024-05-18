
export async function getMovies() {
    const res: any = await fetch('http://localhost:3000/movie', { method: 'GET' })
        .then(response => response.json())
        .then(json => json)
    return await res
}

export async function getMoviesByGenre() {
    const res = await fetch('http://localhost:3000/movie/moviesbygenres', { method: 'GET' })
        .then(response => response.json())
        .then(json => json)
        .catch(err => console.log(err))
    return await res
}
