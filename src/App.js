import './App.css';
import Home from './Home';
import Form from './Form.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Form" exact component={Form} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
