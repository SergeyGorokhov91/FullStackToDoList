import './App.css';
import ListTaskComponent from "./components/ListTaskComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import {BrowserRouter as Router} from "react-router-dom";
import {Routes, Route} from "react-router";
import CreateTaskComponent from "./components/CreateTaskComponent";
function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
        <div className="container">
          <Routes>
            <Route path="/" element={<ListTaskComponent/>}></Route>
            <Route path="/tasks" element={<ListTaskComponent/>}></Route>
            <Route path="/add-task/:id" element={<CreateTaskComponent/>}></Route>
          </Routes>
        </div>
        <FooterComponent/>
      </Router>
    </div>

  );
}

export default App;
