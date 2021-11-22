import { GET_HEROES, GET_HEROES_ERROR } from "../actions/types";

const initialState = [];

function heroesReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_HEROES:
      return payload;
    case GET_HEROES_ERROR:
      return payload;
    default:
      return state;
  }
}

export default heroesReducer;
