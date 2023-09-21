const key = process.env.NEXT_PUBLIC_API_KEY

let requests = {
  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  trending: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
  upComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  latest: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
}

export const getUrlString = (api, query) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${query}`
}

export default requests;