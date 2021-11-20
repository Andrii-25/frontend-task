import { GET_HEROES } from "../actions/types";

const initialState = [];

function heroesReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_HEROES:
      return payload;
    default:
      return state;
  }
}

export default heroesReducer;
