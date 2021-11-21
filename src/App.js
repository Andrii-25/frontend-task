import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHeroes } from "./actions/heroes";
import "./App.css";
import MainPage from "./pages/MainPage";

function App() {
  const dispatch = useDispatch();
  const heroes = useSelector((state) => state.heroes);

  // useEffect(async () => {
  //   await dispatch(getHeroes(9));
  // }, []);

  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
