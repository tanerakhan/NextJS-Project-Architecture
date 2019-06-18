import actions from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case actions.FOOTER:
      return { ...state, footer: action.footer };
    default:
      return state;
  }
};
