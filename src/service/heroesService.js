import http from "../http-common";

class HeroesService {
  getHeroes(pageNumber = 1) {
    return http.get(`/people?page=${pageNumber}`);
  }
}

export default new HeroesService();
