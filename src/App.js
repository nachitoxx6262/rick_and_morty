import "./App.css";
import Nav from "./Components/Nav/Nav";
import Card from "./Components/Card/Card";
import { Route } from "react-router-dom";
import About from './Components/About/About';
import Form from './Components/Form/Form';
import Cards from './Components/Cards/Cards';
import { useDispatch } from "react-redux";
import Start from './Components/Start/Start';
function App() {
  return (
    <div className="App">
      <Nav />
      <hr />
      <Route exact path="/" component={Start}/>
      <Route path="/home" component={Cards}/>
      <Route path="/about" component={About}/>
      <Route path="/form" component={Form}/>
    </div>
  );
}

export default App;
