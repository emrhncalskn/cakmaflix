"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getMovies } from '@/services/movie';

const MovieHero = ({ id }: { id?: number }) => {
    const [movies, setMovies] = useState<any[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const fetchedMovies = await getMovies();
                setMovies(fetchedMovies);
            } catch (error) {
                console.log(error);
            }
        };

        fetchMovies();
    }, []);

    let movie: any;
    if (movies.length > 0) {
        if (!id) {
            let randomIndex = Math.floor(Math.random() * movies.length);
            movie = movies[randomIndex];
            id = movie.id;
            console.log(randomIndex, ' ', movie.id, ' ', id);
        }
        movie = movies.find(movie => movie.id === id);
    }

    return (
        //emr NOTE z index
        <div className='relative'>
            <div className=' w-full h-[100vh] '>
                {movie && (
                    <Image src={movie.hero_image} layout='fill' objectFit='cover' alt='' />
                )}
            </div>
            <div className='flex justify-center items-center absolute z-10 inset-0 bg-black/60'>
                {movie && (
                    <div className='flex container mb-40 flex-col'>
                        <h1 className=' text-8xl'>{movie.name}</h1>
                        <p className=' text-2xl w-[75%]'>{movie.description}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MovieHero;
