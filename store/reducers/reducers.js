const INITIAL_STATE = {
  searchParam: [],
  imdbIdParam:{}
};

const Reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SEARCH":
      return { ...state, searchParam: action.searchParam };
    default:
      return {...state};
  }
};

export default Reducers;
