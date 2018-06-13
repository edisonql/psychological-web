import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import get from 'lodash/get'
import groupBy from 'lodash/groupBy'
import map from 'lodash/map'
import { Button, Card, Input, Row, Col} from 'antd'
import { getData } from '../actions'
import '../App.css'

class ExaminationPaper extends React.Component {
    next() {
      const current = this.state.current + 1;
      this.setState({ current });
    }
    prev() {
      const current = this.state.current - 1;
      this.setState({ current });
    }
    componentDidMount() {
      this.props.getData()
    }
    state = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0, current: 0 }
    onChange = (e) => {
      const reg = /^[0-9]*$/
      if (!reg.test(e.value)) {
        e.value = ''
      }
      if (e.value > 5) {
        e.value = 5
      }
      if (e.value < 0) {
        e.value = 0
      }
      this.setState({
        [e.name]: this.state[e.name] + parseInt(e.value),
      })
      const option = e.id.split('-')
      // const type = e.name
      if (option.length > 1) {
        let targetId = ''
        if (option[1] === 'A') {
          targetId = e.id.replace(option[1], 'B')
        } else if (option[1] === 'B') {
          targetId = e.id.replace(option[1], 'A')
        }
        const target = document.getElementById(targetId)
        target.value = 5 - e.value
        this.setState({
          [target.name]: this.state[target.name] + parseInt(target.value),
        })
      }
    }

    calculator = () => {
      let result = ''
      if (this.state['E'] > this.state['I']) {
        result += 'E'
      } else {
        result += 'I'
      }
      if (this.state['S'] > this.state['N']) {
        result += 'S'
      } else {
        result += 'N'
      }
      if (this.state['T'] > this.state['F']) {
        result += 'T'
      } else {
        result += 'F'
      }
      if (this.state['J'] > this.state['P']) {
        result += 'J'
      } else {
        result += 'P'
      }

      this.props.history.push(`/result/${result}`)
    }

    renderContent = (scaleData) => {
      const answers = scaleData[this.state.current] && scaleData[this.state.current].answers
      const groupAnswerBySN = answers && groupBy(answers, item => item.sn)
      return (
        <div>
          {
            map(groupAnswerBySN, (value) => {
              return (
                <div style={{ margin: '5px' }}>
                <span style={{ position: 'absolute' }}>{`${value[0].sn}.`}</span>
                {
                  value.map(item => {
                    const optionWord = item.option.substring(0,1)
                      return <Row style={{marginLeft: '25px' }}>
                        <Col span={7}><span>{item.option}</span></Col>
                        <Col span={5}>
                          <Input
                            key={`${item.sn}-${optionWord}`}
                            style={{ width: '70px' }}
                            id={`${item.sn}-${optionWord}`}
                            name={item.category}
                            onChange={(e) => this.onChange(e.target)}
                          />
                        </Col>
                      </Row>
                  })
                }
                </div>
              )
            })
          }
        </div>
      )
    }

    render() {
        const scaleData = get(this.props, 'scaleData', [])
        return <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Card title={scaleData[this.state.current] && scaleData[this.state.current].subject} bordered={false} style={{ width: '100%' }}>
          {
            this.renderContent(scaleData)
          }
          </Card>
          <div className="steps-action">
            {
              this.state.current < scaleData.length - 1
              &&
              <Button type="primary" onClick={() => this.next()}>下一题</Button>
            }
            {
              this.state.current === scaleData.length - 1
              &&
              <Button type="primary" onClick={this.calculator}>完成</Button>
            }
          </div>
        </div>
    }
}
// {
//   this.state.current > 0
//   &&
//   <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
//     上一题
//   </Button>
// }


const mapStateToProps = (state, props) => ({
  scaleData: state.scaleModalReducer.scaleData,
  categoryKeys: state.scaleModalReducer.categoryKeys,
})

export default withRouter(connect(mapStateToProps, {getData})(ExaminationPaper))
