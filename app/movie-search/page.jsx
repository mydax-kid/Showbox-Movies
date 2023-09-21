import MovieList from "../components/MovieList";
import { getUrlString} from '../api'

const MovieSearch = ({searchParams}) => {
    const {search_term} = searchParams
    const API = process.env.NEXT_PUBLIC_API_KEY
    const queryUrl = getUrlString(API, search_term)

    return (
        <>
            <div className="w-full px-2 md:w-[80%] mx-auto">
                <h1 className="text-center p-8 md:p-18 text-sm lg:text-4xl">{`Search results for "${search_term}"`}</h1>
                <MovieList query= {queryUrl} />
            </div>
        </>
     );
}
 
export default MovieSearch;