import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './Nav';
import Home from '../pages/home/Home';
import Battle from '../pages/battle/Battle'
import Popular from '../pages/popular/Popular';
import Results from "../pages/battle/Results";

function App() {
  return (
    <main className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/battle' exact component={Battle}/>
          <Route path='/popular' exact component={Popular} />
          <Route path='/battle/results' exact component={Results} />
          <Route render={() => <p>Page Not Found!</p>} />
        </Switch>
     </Router>
    </main>
  );
}

export default App;
