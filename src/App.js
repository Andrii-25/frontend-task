import { BrowserRouter, Route, Routes } from "react-router-dom";
import TablePage from "./pages/TablePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/table" element={<TablePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
