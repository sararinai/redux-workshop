import axios from 'axios';
const API_URI = 'http://127.0.0.1:3000/api/0.1/';
const API_KEY = 'AIzaSyAk-aZkG4d0yS_TRTh2NyAtEfhtAfQdE5c';
const GOOGLE_API = `https://www.googleapis.com/books/v1/volumes`;

export const FETCH_BOOKS = 'FETCH_BOOKS';
export const GOOGLE_API_SEARCH = 'GOOGLE_API_SEARCH';
export const CHANGE_VIEW = 'CHANGE_VIEW';

export function fetchBooks() {
  let books = axios.get(`${API_URI}books`);
  return {
    type: FETCH_BOOKS,
    payload: books
  }
}

export function googleAPISearch(query, type) { //+subject:Computers &orderBy=newest
  query = transformToSpecificQuery(query, type);

  let request = `${GOOGLE_API}?key=${API_KEY}&q=${query}+subject:Computers&maxResults=40`,
      books = axios.get(request);

  console.log(request);
  return {
    type: GOOGLE_API_SEARCH,
    payload: books
  }
}

function transformToSpecificQuery(query, type){
  query = `"${query}"`;
  /*
   intitle: Returns results where the text following this keyword is found in the title.
   inauthor: Returns results where the text following this keyword is found in the author.
   inpublisher: Returns results where the text following this keyword is found in the publisher.
   subject: Returns results where the text following this keyword is listed in the category list of the volume.
   isbn: Returns results where the text following this keyword is the ISBN number.
   lccn: Returns results where the text following this keyword is the Library of Congress Control Number.
   oclc: Returns results where the text following this keyword is the Online Computer Library Center number.
   */
  //TODO implement (n) author search..
  switch (type) {
    case 'author':
      return `inauthor:${query}`;
    case 'publisher':
      return `inpublisher:${query}`;
    case 'title':
      return `intitle:${query}`;
    default:
      return query;
  }
}

export function googleAPIGetBook(idGoogle) { //+subject:Computers &orderBy=newest
  let books = axios.get(`${GOOGLE_API}/${idGoogle}?key=${API_KEY}`);

  return {
    type: GOOGLE_API_SEARCH,
    payload: books
  }
}

export function changeView(activeView) {
  return  {
    type: CHANGE_VIEW,
    payload: activeView
  }
}