import React from 'react'
import { Counter } from './features/counter/Counter'
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch, link } from 'react-router-dom'
import Detail from './components/Detail'

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="detail">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
