import MovieHero from "@/components/movie/hero/movieHero"

async function MoviePage({ params }: { params: { id: string } }) {

    return (
        <div>
            <MovieHero id={Number(params.id)} />
        </div>
    )
}

export default MoviePage