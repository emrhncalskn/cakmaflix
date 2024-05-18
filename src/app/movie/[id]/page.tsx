import MovieHero from "@/components/movie/hero/movieHero"

async function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function MoviePage({ params }: { params: { id: string } }) {

    await delay(3000);

    return (
        <div>
            <MovieHero id={Number(params.id)} />
        </div>
    )
}

export default MoviePage