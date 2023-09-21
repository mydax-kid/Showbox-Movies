'use client'
import {useState, useEffect} from 'react'
import Moviecard from "./Moviecard";

const MovieList = ({query}) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies(query)
    },[query])

    async function getMovies(query) {
        const res = await fetch(query);
        const data = await res.json()
        setMovies(data.results)
    }

    if (movies?.length === 0) return <div className="text-center p-24">No results to show</div>

    return ( 
        <div className= 'grid-custom rounded-lg py-4 lg:p-4 mb-14'>
            {
                movies?.map((item) => {
                    return(
                        <Moviecard key= {item.id} item= {item} />
                    )
                })
            }
        </div>
     );
}
 
export default MovieList;
