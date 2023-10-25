import './App.css';
import ListTaskComponent from "./components/ListTaskComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import {BrowserRouter as Router} from "react-router-dom";
import {Routes, Route} from "react-router";
import CreateTaskComponent from "./components/CreateTaskComponent";
import ViewTaskComponent from "./components/ViewTaskComponent";
import {useState} from "react";
function App() {
  const [searchResults, setSearchResults] = useState("");

  return (
    <div>
      <Router>
        <HeaderComponent setSearchResults={setSearchResults}/>
        <div className="container">
          <Routes>
            <Route path="/" element={<ListTaskComponent searchText={searchResults}/>}></Route>
            <Route path="/tasks" element={<ListTaskComponent searchText={searchResults}/>}></Route>
            <Route path="/add-task/:id" element={<CreateTaskComponent/>}></Route>
            <Route path="/view-task/:id" element={<ViewTaskComponent/>}></Route>
          </Routes>
        </div>
        <FooterComponent/>
      </Router>
    </div>

  );
}

export default App;
