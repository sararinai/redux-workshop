import axios from 'axios';
const API_URI = 'http://127.0.0.1:3000/api/0.1/';

export const FETCH_BOOKS = 'FETCH_BOOKS';

export function fetchBooks() {
    let books = axios.get(`${API_URI}books`);
    return {
        type: FETCH_BOOKS,
        payload: books
    }
}