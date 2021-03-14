import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import Home from './Home';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <div className="menu">
          <Link to="/">Home</Link>  
          <Link to="/about">About</Link> 
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
