import { Movie } from '@/types/movie-type'
import Link from 'next/link'

async function genreCard({ movie }: { movie: Movie }) {

    return (
        <Link href={"/movie/" + movie.id} className='group [perspective:1000px]'>
            <div className='  [transform-style:preserve-3d] transition-all duration-500 delay-25 group-hover:[transform:rotateY(180deg)] w-52 flex flex-col overflow-hidden'>
                <img src={movie.thumbnail} alt='' className='min-h-80 rounded-lg delay-200 group-hover:[transform:rotateY(180deg)]' />
                <h2 className='absolute px-5 group-hover:opacity-0 delay-200 duration-200 bg-black/30 flex justify-center items-center text-center container inset-0 text-2xl'>{movie.name}</h2>
                <p className='absolute px-5 bg-black/90 opacity-0 group-hover:opacity-100 [transform:rotateY(180deg)] delay-300 duration-300 transition-opacity flex justify-center items-center text-center container inset-0 text-xl'>{movie.description}</p>
            </div>
        </Link>
    )
}

export default genreCard