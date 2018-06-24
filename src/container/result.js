import React from 'react'
import { Card, Button, Input, Row, Col } from 'antd'
import get from 'lodash/get'
import * as result from '../constants'

class Register extends React.Component {
    constructor(props) {
      super(props)
    }
    // reviewHideArea() {
    //   const codeInput = document.getElementById('authorizationCode')
    //   if (codeInput.value === '3128') {
    //     const hideArea = document.getElementsByName('hideArea')
    //     hideArea.forEach(element => {
    //       element.style.display = 'inline'
    //     })
    //   }
    // }
    // componentDidMount() {
    //   const hideArea = document.getElementsByName('hideArea')
    //   hideArea.forEach(element => {
    //     element.style.display = 'none'
    //   })
    // }

    render() {
        const resultKey = get(this.props, 'match.params.resultKey')
        return (<div style={{ background: '#ECECEC', padding: '30px' }}>
          <Row style={{margin:'20px'}}>
            <Col span={2}><label>授权码：</label></Col>
            <Col span={4}><Input id="authorizationCode" /></Col>
            <Col span={4}>
              <Button
                type="primary"
                // onClick={() => this.reviewHideArea()}
              >
                查看隐藏文档
              </Button>
            </Col>
          </Row>
          <Card title={`您的专属性格：${resultKey}`} bordered={false}>
            {result[resultKey]}
          </Card>
        </div>)
    }
}

export default Register
