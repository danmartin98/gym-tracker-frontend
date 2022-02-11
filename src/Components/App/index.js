import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import LoginPage from "../PAGES/LoginPage";
import ExercisePage from "../PAGES/ExercisePage";
import useFetch from "../../Custom Hooks/customHooks.js";

function App() {
  const [data] = useFetch("https://dga-gym-tracker.herokuapp.com/");
  console.log(data);
  return (
    <div className="App">
      Hello
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/exercises" element={<ExercisePage data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
