import MovieHero from '@/components/movie/movieHero';
import MoviesContainer from '@/components/movie/moviesContainer';

//TODO filmler backendden çekilecek belki featured 1 olanlar slider olarak listelenebilir
function Anasayfa() {

    return (
        <div>
            <MovieHero />
            <MoviesContainer className='pt-10' />
        </div>
    )
}

export default Anasayfa