import React from 'react'
import { Route } from 'react-router-dom'
// import { Tabs } from 'antd'
import ExaminationPaper from './container/examinationPaper'
import Result from './container/result'
// const TabPane = Tabs.TabPane

class App extends React.Component {
    render () {
        return (
            <div>
              <Route path="/result/:resultKey" component={Result}>Result</Route>
              <Route path="/examinationPaper" component={ExaminationPaper}>ExaminationPaper</Route>
            </div>
        )
    }
}

export default App
