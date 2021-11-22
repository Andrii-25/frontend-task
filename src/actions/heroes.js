import { GET_HEROES, GET_HEROES_ERROR } from "../actions/types";
import HeroesService from "../service/heroesService";

export const getHeroes = (pageNumber) => async (dispatch) => {
  try {
    const res = await HeroesService.getHeroes(pageNumber);
    dispatch({
      type: GET_HEROES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_HEROES_ERROR,
      payload: { error: err.message },
    });
  }
};
