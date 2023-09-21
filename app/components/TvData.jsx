'use client'
import MovieInfoCard from "./MovieInfoCard";
import { FaPlayCircle } from "react-icons/fa";
import {useRouter} from 'next/navigation'
import useMenu from '../(store)/store'

const TvData = ({movie}) => {
    const router = useRouter()
    const {setMovie} = useMenu()

    const handleWatchMovie = () => {
        setMovie(movie)
        router.push('/watch-movie')
    }

    return ( 
        <>
            <div className='relative h-[500px] md:h-[800px] z-0'>
                <img
                    src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} 
                    alt= ''
                    loading= 'lazy'
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute grid place-items-center bg-black/50 hover:bg-black/70 inset-0 transition duration-700 ease">
                    <FaPlayCircle size= {80} className='text-yellow-400 hover:text-yellow-300 cursor-pointer pulse-custom' onClick={handleWatchMovie}/>
                </div>
            </div>
            <MovieInfoCard movie={movie} viewMode= {false} />
        </>
    )
}
 
export default TvData;


// {/* <div className='relative h-[500px] md:h-[800px] z-0'>
// <iframe
//     width="100%"
//     height="100%"
//     src={`https://www.youtube.com/embed/${movie.videos.results[0]?.key}`} 
//     title={movie.videos.results[0]?.name} 
//     allowFullScreen
// />
// </div> */}