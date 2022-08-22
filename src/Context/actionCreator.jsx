export const LOGIN_REQUEST = { type: "FETCh USER_LOADING" };
export const LOGIN_SUCCESS = { type: "FETCH USER_SUCCESS" };
export const LOGIN_FAILURE = { type: "FETCH USER_FAILURE" };

export const GET_PRODUCTS_REQUEST = { type: "FETCh Data_LOADING" };
export const GET_PRODUCTS_SUCCESS = { type: "FETCH Data_SUCCESS" };
export const GET_PRODUCTS_FAILURE = { type: "FETCH Data_FAILURE" };

export const fetchUser = (dispatch, query) => {
  dispatch(fetchAction);
  fetch(`https://reqres.in/api/login`)
    .then((res) => res.json())
    .then((res) => {
      dispatch({ ...fetchAction, payload: res.items });
    })
    .catch((res) => {
      dispatch(fetchAction);
    });
};
