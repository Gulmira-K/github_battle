import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './Home';
import Battle from './Battle';
import Popular from './Popular';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/battle' exact component={Battle}/>
          <Route path='/popular' exact component={Popular}/>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
