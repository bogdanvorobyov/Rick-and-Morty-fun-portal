import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './header/Header'
import Home from './home/Home'
import Characters from './characters/Chatacters'
import Episodes from './episodes/Episodes'
import Locations from './locations/Locations'


function App() {
  return (
    <div className="main">
      <Router> 
        <Header/>
        <Switch>
            <Route exact path ='/' component={Home}></Route>
            <Route exact path ='/characters' component={Characters}></Route>
            <Route exact path ='/locations' component={Locations}></Route>
            <Route exact path ='/episodes' component={Episodes}></Route>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
