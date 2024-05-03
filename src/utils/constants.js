export const LOGO_URL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1280px-IMDB_Logo_2016.svg.png'

export const WATCHLIST_URL = 'https://cdn-icons-png.flaticon.com/128/6748/6748737.png'

export const USER_URL = 'https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg'

export const SEARCH_URL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/945px-Vector_search_icon.svg.png'

export const OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_APP_TMDB_KEY
    }
};

export const SEARCH_ALL_URL = 'https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&page=1&query=';
export const SEARCH_MOVIE_URL = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=';
export const SEARCH_TV_URL = 'https://api.themoviedb.org/3/search/tv?include_adult=false&language=en-US&page=1&query=';
export const SEARCH_CELEB_URL = 'https://api.themoviedb.org/3/search/person?include_adult=false&language=en-US&page=1&query=';

