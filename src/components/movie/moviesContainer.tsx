"use client";
import GenreCard from '@/components/movie/genre/genreCard';
import { getMoviesByGenre } from '@/services/movie';
import { cn } from '@/utils/class-helper';
import { Suspense, useEffect, useState } from 'react';
import GenreSkeleton from './genre/loading';

const MoviesContainer = ({ className }: { className?: string }) => {
    const [movies, setMovies] = useState<any[]>([]);

    useEffect(() => {
        getMoviesByGenre().then((res) => setMovies(res));
        const fetchMoviesByGenre = async () => {
            const fetchedGenres = await getMoviesByGenre();
            setMovies(fetchedGenres);
        };

        fetchMoviesByGenre();
    }, []);

    return (
        <Suspense fallback={<GenreSkeleton />}>

            <div className={cn('container mx-auto', className)}>
                {movies && movies.map((e: any) => (
                    <div key={e.name}>
                        <h1 className='text-2xl font-bold pb-3'>{e.name}</h1>
                        <div className='flex container flex-wrap gap-10 pb-10 justify-start'>
                            {e.movieGenres.slice(0, 5).map((genre: any) => (
                                <GenreCard key={genre.movie.id} movie={genre.movie} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Suspense>

    );
};

export default MoviesContainer;
