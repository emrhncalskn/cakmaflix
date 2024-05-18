import MovieHero from '@/components/movie/hero/movieHero';
import MoviesContainer from '@/components/movie/moviesContainer';


//TODO filmler backendden çekilecek belki featured 1 olanlar slider olarak listelenebilir
async function Anasayfa() {

    return (
        <div>
            <MovieHero />
            <MoviesContainer className='pt-10' />
        </div>
    )
}

export default Anasayfa