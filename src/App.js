import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/meals">
            <Meals></Meals>
          </Route>
          <Route path="/about">

          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
