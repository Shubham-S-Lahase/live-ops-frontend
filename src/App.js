import "./App.css";
import Registerform from "./components/Registerform";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Registerform />
      </div>
    </Router>
  );
}

export default App;
