import './App.css';
import ListTaskComponent from "./components/ListTaskComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import {BrowserRouter as Router} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
        <div className="container">
          <Routes>
            <Route path="/" element={<ListTaskComponent/>}></Route>
            <Route path="/tasks" element={<ListTaskComponent/>}></Route>
          </Routes>
        </div>
        <FooterComponent/>
      </Router>
    </div>

  );
}

export default App;