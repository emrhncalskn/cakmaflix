import GenreSkeleton from '@/components/movie/genre/loading'
import HeroLoading from '@/components/movie/hero/loading'

function HomepageLoading() {
    return (
        <div className='container mx-auto'>
            <HeroLoading />
            <GenreSkeleton />
        </div>
    )
}

export default HomepageLoading