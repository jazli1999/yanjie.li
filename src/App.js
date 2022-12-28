import { BrowserRouter as Router } from "react-router-dom";
import MainPage from "./MainPage";
import "./App.less";

const App = () => {
  return (
    <Router>
      <MainPage />
    </Router>
  );
};

export default App;
