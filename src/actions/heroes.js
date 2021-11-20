import {
    GET_HEROES
  } from "../actions/types";
  import HeroesService from "../service/HeroesService";
  
  export const getItems = () => async (dispatch) => {
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