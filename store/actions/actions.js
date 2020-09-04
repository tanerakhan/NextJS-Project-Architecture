import fetch from "isomorphic-unfetch";
//import axios from 'axios';
export const searchResult = (searchParam) => ({ 
  type: "SEARCH",
  searchParam
 });

export const search = () => (dispatch) =>
fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          console.log(res);
          return res.json();
          })
        .then((json) => {
            dispatch(searchResult(json))
          });


/*   dispatch({
    type: types.TICK,
    payload: { light: false, ts: Date.now() },
  }) */

  /* export const GetFooter = () => async (dispatch) => {
  const footer = await fetch.get("https://jsonplaceholder.typicode.com/users");
  return dispatch({ type: actions.FOOTER, footer: footer.data });
}; */


/* export const getUser = id => async dispatch => {
  const user = await axios.get(`/users/${id}`);
  return dispatch({ type: actions.GET_USER, user: user.data });
}; */
