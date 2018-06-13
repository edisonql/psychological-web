import React from 'react'
import { Card } from 'antd'
import get from 'lodash/get'
import * as result from '../constants'

class Register extends React.Component {
    constructor(props) {
      super(props);
      console.log(props.location)
    }
    render() {
        console.log(this.props.match.params.resultKey)
        const resultKey = get(this.props, 'match.params.resultKey')
        return (<div style={{ background: '#ECECEC', padding: '30px' }}>
          <Card title={`您的专属性格：${resultKey}`} bordered={false}>
            {result[resultKey]}
          </Card>
        </div>)
    }
}

export default Register
