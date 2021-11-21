import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHeroes } from "./actions/heroes";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";

function App() {
  const dispatch = useDispatch();
  const heroes = useSelector((state) => state.heroes);

  useEffect(async () => {
    await dispatch(getHeroes());
  }, []);

  return (
    <div className="App">
      {/* <Header /> */}
      {/* {JSON.stringify(heroes)} */}
      <MainPage />
    </div>
  );
}

export default App;
