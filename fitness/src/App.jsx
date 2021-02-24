import React from 'react'
import Home from './components/Home'
// import { Navbar } from './components/Navbar'
import Footer from './components/Footer'
import Plans from './pages/Plans'
import { Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="app" >
      {/* <Navbar /> */}
      
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Plans' component={Plans} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App

