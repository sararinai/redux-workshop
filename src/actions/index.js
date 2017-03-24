import axios from 'axios';
const API_URI = 'http://127.0.0.1:3000/api/0.1/';
const API_KEY = 'AIzaSyAk-aZkG4d0yS_TRTh2NyAtEfhtAfQdE5c';
const GOOGLE_API = `https://www.googleapis.com/books/v1/volumes`;

export const FETCH_BOOKS = 'FETCH_BOOKS';
export const GOOGLE_API_SEARCH = 'GOOGLE_API_SEARCH';

export function fetchBooks() {
    let books = axios.get(`${API_URI}books`);
    return {
        type: FETCH_BOOKS,
        payload: books
    }
}

export function googleAPISearch(query){ //+subject:Computers &orderBy=newest
    let books = axios.get(`${GOOGLE_API}?key=${API_KEY}&q="${query}"+subject:Computers&maxResults=40`);

    return {
        type: GOOGLE_API_SEARCH,
        payload:books
    }
}

export function googleAPIGetBook(idGoogle){ //+subject:Computers &orderBy=newest
    let books = axios.get(`${GOOGLE_API}/${idGoogle}?key=${API_KEY}`);

    return {
        type: GOOGLE_API_SEARCH,
        payload:books
    }
}