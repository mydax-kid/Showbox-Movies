"use client"
import MovieList from './components/MovieList'
import requests from './api.js'
import {useState} from 'react'
import useMenu from './(store)/store'

export default function Home() {
  const [queries, setQueries] = useState(requests)
  const [value, setValue] = useState('')
  const {setMediaType, mediaType} = useMenu()

  const handleClick = (e) => {
    let value = e.target.textContent
    let newRequests = {}

    if (value == 'TV SHOWS') {
      for (const key in requests) {
        if (requests.hasOwnProperty(key)) {
          newRequests[key] = requests[key].replace('/movie', '/tv')
                                          .replace('/upcoming', '/airing_today')
                                          .replace('/now_playing', '/on_the_air');
        }
      }
      setMediaType('tv')
    } else {
      for (const key in requests) {
        if (requests.hasOwnProperty(key)) {
          newRequests[key] = requests[key].replace('/tv', '/movie');
        }
      }
      setMediaType('movie')
    }
    setQueries(newRequests)
    setValue(value)
  }

  return (
    <div className='bg-slate-50'>
      <main className="mt-12 max-w-[90%] mx-auto">
        <div className='flex justify-start my-4'>
          <h1 className='hidden md:block text-2xl'>Trending</h1>
          <div className= {`${mediaType === 'movie' ? 'bg-yellow-300' : 'bg-white'} p-2 md:ml-6 text-xs md:text-sm cursor-pointer hover:shadow-sm`} onClick= {handleClick}>MOVIES</div>
          <div className= {`${mediaType === 'tv' ? 'bg-yellow-300' : 'bg-white'} ml-2 text-xs md:text-sm flex place-items-center p-2 py-1 rounded-sm cursor-pointer hover:shadow-sm`} onClick= {handleClick}>TV SHOWS</div>
        </div>
        <MovieList query= {queries.trending}/>
        <div>
          <h1 className='mb-4 text-lg'>Latest {value}</h1>
          <MovieList query= {queries.latest}/>
        </div>
        <div>
          <h1 className='mb-4 text-lg'>TopRated {value}</h1>
          <MovieList query= {queries.topRated}/>
        </div>
        <div>
          <h1 className='mb-4 text-lg'>Upcoming {value}</h1>
          <MovieList query= {queries.upComing}/>
        </div>
      </main>
    </div>
  )
}
