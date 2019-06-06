import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Practice from 'pages/Practice/index'
import PracticeList from 'pages/PracticeList/index'
import Statistics from 'pages/Statistics/index'
import Home from 'pages/Home/index'
import Header from 'shared/Layout/Header/index'

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/practice_list/:id" exact component={Practice} />
          <Route path="/practice_list" exact component={PracticeList} />
          <Route path="/statistics" exact component={Statistics} />
        </Switch>
      </Router>
    )
  }
}

export default App
