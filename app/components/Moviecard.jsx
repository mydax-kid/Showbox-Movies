'use client'
import {FaPlayCircle} from 'react-icons/fa'
import Link from 'next/link'
import useMenu from '../(store)/store'

const Moviecard = ({item}) => {
    const {mediaType} = useMenu()

    // const [mediaType, setMediaType] = useState('');
    // useEffect(() => {
    //   if (Object.hasOwn(item, "seasons")) {
    //     setMediaType('tv'); 
    //   } else {
    //     setMediaType('movie'); 
    //   }
    // }, [item]); 
    
    const newDate = (item.release_date || item.first_air_date)?.split('-')[0];

    return ( 
        <div className= 'w-full relative'>
            <Link href= {`/${item?.id}?mediatype=${mediaType}`}>
                <div className='relative rounded-lg overflow-hidden'>
                    <img
                        className= 'image-custom object-cover w-full h-[265px] object-center rounded-lg' 
                        src= {`https://image.tmdb.org/t/p/w500/${item?.poster_path}`} 
                        alt= {item?.title}
                        loading= "lazy"
                    />
                    <div className='opacity-0 grid place-items-center absolute left-0 right-0 top-0 bottom-0 bg-black/70 hover:opacity-100 transition ease-out duration-700'>
                        <FaPlayCircle size= {60} className='text-yellow-400'/>
                    </div>
                </div>
            </Link>
            <h2 className='text-xs font-bold md:text-sm p-0.5'>
                {item?.title && item?.title.length > 15 ? `${item?.title.slice(0, 15)}...` : item?.title || item?.name.slice(0, 15).concat('...')}
            </h2>
            <div className='flex justify-between md:text-sm p-0.5'>
                <span className=' text-xs'>{newDate}</span>
                <span className='border rounded-sm px-0.5 text-xs'>{ mediaType == 'movie' ? 'MOVIE' : 'SERIES' }</span>
            </div>
            <div className="absolute top-[5px] right-[5px] bg-white p-[2px] text-xs font-bold rounded-sm">HD</div>
        </div>
    );
}
 
export default Moviecard;



