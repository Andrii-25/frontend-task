import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHeroes } from "./actions/heroes";
import "./App.css";
import Header from "./components/Header";

function App() {
  const dispatch = useDispatch();
  const heroes = useSelector((state) => state.heroes);

  useEffect(async () => {
    await dispatch(getHeroes());
  }, []);

  return (
    <div className="App">
      <Header />
      {JSON.stringify(heroes)}
    </div>
  );
}

export default App;
