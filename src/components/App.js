import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';
import Popular from './Popular';

function App() {
  return (
    <main className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/battle' exact component={Battle}/>
          <Route path='/popular' exact component={Popular}/>
        </Switch>
     </Router>
    </main>
  );
}

export default App;
