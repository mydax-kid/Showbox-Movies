'use client'
import MovieInfoCard from "../components/MovieInfoCard";
import useMenu from "../(store)/store";

const WatchMovie = () => {
    const {movie} = useMenu() 

    if (Object.keys(movie).length === 0) {
      return (
        <div className='w-full h-screen grid place-items-center'>An error occured...</div>
      )
    }

    return (
        movie && (
          <>
            <div className='relative h-[500px] md:h-[800px] z-0'>
              <div className="w-full lg:w-[80%] h-full mx-auto py-[20px]">
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${movie?.videos?.results[0]?.key}`} 
                    title={movie?.videos?.results[0]?.name} 
                    allowFullScreen
                />
              </div>
            </div>
            <MovieInfoCard movie={movie} viewMode={true}/>
          </>
        )
    );
      
}
 
export default WatchMovie;