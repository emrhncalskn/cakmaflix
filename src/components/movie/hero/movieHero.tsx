"use client";
import { getMovies } from '@/services/movie';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import HeroLoading from './loading';
import { Movie } from '@/types/movie-type';

const MovieHero = ({ id }: { id?: number }) => {

    const { data: movies, isLoading } = useQuery<Movie[]>({ queryKey: ['movies'], queryFn: getMovies })


    if (isLoading) return <HeroLoading />
    if (!movies || movies.length == 0) return;

    let movie: Movie | any;
    if (!isLoading && movies.length > 0) {
        if (!id) {
            let randomIndex = Math.floor(Math.random() * movies.length);
            movie = movies[randomIndex];
            id = movie.id;
            console.log(randomIndex, ' ', movie.id, ' ', id);
        }
        movie = movies.find(movie => movie.id === id);
    }
    else movie = null;

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
