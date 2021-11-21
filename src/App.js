import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHeroes } from "./actions/heroes";
import "./App.css";
import TablePage from "./pages/TablePage";

function App() {
  return (
    <div className="App">
      <TablePage />
    </div>
  );
}

export default App;
