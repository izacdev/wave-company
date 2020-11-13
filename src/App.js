import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/collections/home';
import Services from './components/collections/services';
import Contact from './components/collections/contact';
import About from './components/collections/about';
import Inbox from './components/collections/inbox';
import Signup from './components/collections/signup'
import './App.css';

function App() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/services" component={Services}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/about" component={About}/>
            <Route path="/inbox" component={Inbox}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/home" component={Home}/>
            <Route component={error}/> 
          </Switch>
        </div>
      </Router>
    )
  }
  const error = () => (
    <div>
      <h1>Page Not Found <br/> 
          Try To Refresh or Check Your internet_Connection
      </h1>
    </div>
  )

export default App;
