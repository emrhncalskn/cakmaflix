import React, { Suspense } from 'react'
import Anasayfa from './anasayfa/page'
import HomepageLoading from './anasayfa/loading'

function Homepage() {
    return (
        <Suspense fallback={<HomepageLoading />}>
            <Anasayfa />
        </Suspense>
    )
}

export default Homepage