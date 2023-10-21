import './App.css';
import ListTaskComponent from "./components/ListTaskComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
      <HeaderComponent/>
      <div className="container">
        <ListTaskComponent/>
      </div>
      <FooterComponent/>
    </div>

  );
}

export default App;
