import actions from "../actions";

const INITIAL_STATE = {
  searchParam: [],
  imdbIdParam:{}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SEARCH":
      return { ...state, searchParam: action.searchParam };
    default:
      return {...state};
  }
};
