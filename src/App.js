import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Destinasi from './components/pages/destinationpage';
// import SignUp from './components/pages/SignUp';
import Registrasi from './components/pages/register';
import Login from './components/pages/login';
import Event from './components/pages/eventpages';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/destination' component={Destinasi} />
          <Route path='/register' component={Registrasi} />
          <Route exact path='/login' component={Login} />
          <Route path='/events' component={Event} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
