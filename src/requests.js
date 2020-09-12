const api_key = "5f068c6d5b3c9996397c250631507cd8";

const requests = {
    fetchPopular : `/movie/popular/?api_key=${api_key}&language=en-US&page=1`,
    fetchNetflixOriginal :`/discover/tv/?api_key=${api_key}&with_networks=213`,
    fetchTopRated : `/movie/top_rated/?api_key=${api_key}&language=en-US`,
    fetchActionMovies : `/discover/movie/?api_key=${api_key}&with_genres=28`,
    fetchComedyMovies : `/discover/movie/?api_key=${api_key}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie/?api_key=${api_key}&with_genres=27`,
    fetchRomanceMovies : `/discover/movie/?api_key=${api_key}&with_genres=10749`,
    fetchDocumentaries : `/discover/movie/?api_key=${api_key}&with_genres=99`,
}

export default requests;