import http from "../http-common";

class HeroesService {
  getHeroes() {
    return http.get("/people");
  }
}

export default new HeroesService();
