import MovieHero from '@/components/movie/movieHero'

function MoviePage({ params }: { params: { id: string } }) {
    return (
        <div>
            <MovieHero id={Number(params.id)} />
        </div>
    )
}

export default MoviePage