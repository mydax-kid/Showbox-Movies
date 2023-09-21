'use client'

const MovieInfoCard = ({movie, viewMode}) => {
    return ( 
        <div className={`shadow-custom w-[90%] md:w-[80%] mx-auto rounded-lg flex gap-10 p-4 md:p-8 ${viewMode ? 'mt-8' : 'mt-[-100px]'} mb-12 md:mb-32 bg-white z-30 relative font-light text-xs md:text-sm`}>
            <div className='hidden md:block'>
                <div className='w-[200px] h-[250px]'>
                    <img 
                    src= {`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} 
                    alt= 'image' 
                    className='w-full h-full bg-green-500 rounded-lg object-fit object-cover mb-1' 
                />
                </div>
                <div className='border-b-2  border-green-700 py-1'>
                    {movie.vote_average} <span className='ml-2 text-green-800'>popularity</span>
                </div>
                <div className='flex justify-between items-center gap-3 py-2'>
                    <div className='px-5 py-1.5 bg-green-700 hover:bg-green-600 cursor-pointer text-white rounded-sm w-[50%] text-center'>Like</div>
                    <div className='px-5 py-1.5 bg-red-700 hover:bg-red-600 cursor-pointer text-white rounded-sm w-[50%] text-center'> Dislike</div>
                </div>
            </div>
            <div >
                <div className='flex items-center gap-5 py-2'>
                    <p className= 'px-5 py-1.5 bg-yellow-400 text-white rounded-sm text-center'>Watch Now</p>
                    <p className='px-5 py-1.5 bg-orange-600 text-white rounded-sm text-center'>+ Favourite</p>
                </div>
                <h1 className="font-bold">{movie?.title || movie.name}</h1>
                <div>
                    <div className='flex items-center gap-2 py-3'>
                        <div className='px-4 py-0.5 border border-black rounded-sm text-center'>Trailer</div>
                        <div className='px-3 py-0.5 border border-black rounded-sm text-center'>HD</div>
                        <div className='text-red-500 font-bold'>IMDB: N/A</div>
                    </div>
                    <p className='py-2'>Premise: {movie?.overview || 'Not Available'}</p>
                    <div className='flex flex-col md:flex-row items-start md:items-center md:gap-10'>
                        <div>
                            <p>Released: {movie?.release_date || movie.first_air_date}</p>
                            <p>Genre: { movie?.genres?.map((item, index) => (<span key= {index}>{item.name} </span>)) }</p>
                            <p>Language: {movie.spoken_languages[0].english_name || movie.spoken_languages[0].name || 'Not Available'}</p>
                        </div>
                        <div>
                            <p>Duration: {movie?.runtime || movie.episode_run_time || 'Not Available'}min</p>
                            <p>Country: {movie?.production_countries[0]?.name || 'Not Available'}</p>
                            <p>Production: { movie?.production_companies?.slice(0,3).map((item, index) => (<span key={index}>{item.name.concat(',')} </span>)) }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default MovieInfoCard;