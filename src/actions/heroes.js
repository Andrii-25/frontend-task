import { GET_HEROES } from "../actions/types";
import HeroesService from "../service/heroesService";

export const getHeroes = () => async (dispatch) => {
  try {
    const res = await HeroesService.getHeroes();

    dispatch({
      type: GET_HEROES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
