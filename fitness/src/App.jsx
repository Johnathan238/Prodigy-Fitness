import React from 'react';
import Home from './components/Home'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="app" >
      <Nav />
      <Header />
      
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App

