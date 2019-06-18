import axios from 'axios'

import actions from "./index";

export const GetFooter = () => async dispatch => {
  const footer = await axios.get("https://jsonplaceholder.typicode.com/users");
  return dispatch({ type: actions.FOOTER, footer:footer.data });
};

/* export const getUser = id => async dispatch => {
  const user = await axios.get(`/users/${id}`);
  return dispatch({ type: actions.GET_USER, user: user.data });
}; */
