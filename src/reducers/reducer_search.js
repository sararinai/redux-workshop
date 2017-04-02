const status = {
  NONE: 'NONE',
  DONE: 'DONE',
  SEARCHING: 'SEARCHING'
};

const initialState = {
  status: status.NONE,
  query :{
    query: '',
    type: 'title',
    maxResults: 20,
    startIndex: 0
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}