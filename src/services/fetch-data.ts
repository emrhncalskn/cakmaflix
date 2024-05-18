"use client"

import { useEffect, useState } from "react";
import { getMovies } from "./movie";

async function fetchData() {
    const [movies, setMovies] = useState<any[]>([]);

    useEffect(() => {
        getMovies().then((res) => { console.log(res); setMovies(res) });
        const fetchMovies = async () => {
            const fetchedMovies = await getMovies();
            setMovies(fetchedMovies);
        };

        fetchMovies();
    }, []);

    return movies;

}

export default fetchData