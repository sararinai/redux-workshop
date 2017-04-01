import {createGoogleRequest} from '../../src/actions/googleApiSearch';

describe('googleApiSearch', () => {

  let maxResults = 20;

  test('it can generate in author request', () => {

    let request = createGoogleRequest('Robert C. Martin', 'author', maxResults, 0);
    expect(request).toContain('q=inauthor:"Robert C. Martin"+subject:Computers&startIndex=0&maxResults=20');
  });

  test('it can generate more than one author request', () => {

    let request = createGoogleRequest('Robert C. Martin;Kent Beck', 'author', maxResults, 0);
    expect(request).toContain('q=inauthor:"Robert C. Martin"+inauthor:"Kent Beck"+subject:Computers&startIndex=0&maxResults=20');
  });

  test('it can generate title request', () => {

    let request = createGoogleRequest('Clean Code', 'title', maxResults, 0);
    expect(request).toContain('q=intitle:"Clean Code"+subject:Computers&startIndex=0&maxResults=20');
  });

  test('it can generate publisher request', () => {

    let request = createGoogleRequest('Packt Publishing', 'publisher', maxResults, 0);
    expect(request).toContain('q=inpublisher:"Packt Publishing"+subject:Computers&startIndex=0&maxResults=20');
  });

  test('it can generate ISBN request', () => {

    let request = createGoogleRequest('1234567890', 'isbn', maxResults, 0);
    expect(request).toContain('q=isbn:1234567890+subject:Computers&startIndex=0&maxResults=20');
  });


});
