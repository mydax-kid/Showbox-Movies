import MovieList from '../components/MovieList'
import MovieData from '../components/MovieData'
import TvData from '../components/TvData'

import {Suspense} from 'react'

async function getMovieData(id, key, mediaType) {
    const res = await fetch(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${key}&append_to_response=videos&language=en-US&page=1`)
    const data = res.json();
    return data;
}

const movieDetails = async ({params, searchParams}) => {
    const key = process.env.NEXT_PUBLIC_API_KEY
    const id = params.movie_id
    const mediaType = searchParams.mediatype
    const data = await getMovieData(id, key, mediaType)
    
    const relatedQuery = `https://api.themoviedb.org/3/discover/${mediaType}?api_key=${key}&with_genres=${data?.genres[0]?.id}&language=en-US&page=1`

    return ( 
        <div>
            { mediaType === 'tv' ?  <TvData movie={data} /> : <MovieData movie={data} />}
            <div>
                <div className='w-full px-2 md:px-0 md:w-[80%] mx-auto'>
                    <h1 className='text-sm md:text-4xl py-4 font-light'>You may also like</h1>
                    <Suspense fallback={<div>Loading...</div>}>
                        <MovieList query= {relatedQuery} />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
 
export default movieDetails;

// const player = new YT.Player('player', {
    //     videoId: `${movie.videos.results[0].key}`,
    //     events: {
    //         'onStateChange': (e) => {
    //             if (e.data === 1) {
    //                 console.log('video playing')
    //             }
    //         }
    //     }
    // });