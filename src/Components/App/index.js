import "./App.css";
import {Routes, Route, Link} from "react-router-dom";
import LoginPage from "../PAGES/LoginPage";

function App() {
  return (
  <div className="App">Hello
  <Routes>
    <Route path="/" element={<LoginPage />}/>
  </Routes>


  </div>
  )
}

export default App;
