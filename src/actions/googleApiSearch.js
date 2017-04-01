import axios from 'axios';
const API_KEY = 'AIzaSyAk-aZkG4d0yS_TRTh2NyAtEfhtAfQdE5c';
const GOOGLE_API = `https://www.googleapis.com/books/v1/volumes`;

export function googleAPISearchGenerator(query, type, maxResults, startIndex) { //+subject:Computers &orderBy=newest
  query = transformToSpecificQuery(query, type);

  let request = `${GOOGLE_API}?key=${API_KEY}&q=${query}+subject:Computers&startIndex=${startIndex}&maxResults=${maxResults}`;
  return axios.get(request); //Promise
}

export function googleAPIGetBook(idGoogle) { //+subject:Computers &orderBy=newest
  let books = axios.get(`${GOOGLE_API}/${idGoogle}?key=${API_KEY}`);

  return {
    type: GOOGLE_API_SEARCH,
    payload: books
  }
}

function transformToSpecificQuery(query, type) {
  let limitedQuery = `"${query.trim()}"`;
  /*
   intitle: Returns results where the text following this keyword is found in the title.
   inauthor: Returns results where the text following this keyword is found in the author.
   inpublisher: Returns results where the text following this keyword is found in the publisher.
   subject: Returns results where the text following this keyword is listed in the category list of the volume.
   isbn: Returns results where the text following this keyword is the ISBN number.
   */
  //TODO implement (n) author search..
  switch (type) {
    case 'author':
      return `inauthor:${limitedQuery}`;
    case 'publisher':
      return `inpublisher:${limitedQuery}`;
    case 'title':
      return `intitle:${limitedQuery}`;
    case 'isbn':
      return `isbn:${query}`;
    default:
      return limitedQuery;
  }
}


/*

 Pagination
 You can paginate the volumes list by specifying two values in the parameters for the request:
 startIndex - The position in the collection at which to start. The index of the first item is 0.
 maxResults - The maximum number of results to return. The default is 10, and the maximum allowable value is 40.

 */
