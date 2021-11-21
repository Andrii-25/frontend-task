import { BrowserRouter, Route, Routes } from "react-router-dom";
import TablePage from "./pages/TablePage";
import MainPage from "./pages/MainPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/table" element={<TablePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
