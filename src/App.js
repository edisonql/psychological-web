import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import { Tabs } from 'antd'
import ExaminationPaper from './container/examinationPaper'
import Result from './container/result'
import Main from './container/main'
// const TabPane = Tabs.TabPane

class App extends React.Component {
    render () {
      return (
          <div>
            <Switch>
              <Route path="/result/:resultKey" component={Result}>Result</Route>
              <Route path="/examinationPaper" component={ExaminationPaper}>ExaminationPaper</Route>
              <Route path="/" component={Main}>Main</Route>
            </Switch>
          </div>
      )
    }
}

export default App
