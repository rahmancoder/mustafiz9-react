
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Services/Services';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import MyChart from './Components/MyChart/MyChart';

function App() {
  return (
    <div className="App">


      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/userchart">
            <MyChart></MyChart>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>


        </Switch>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
