import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {Button} from 'antd'
import { getData } from '../actions'


class Login extends React.Component {
    render() {
        return <Button type="primary" size="large" onClick={this.props.getData}>getData</Button>
    }
}

export default withRouter(connect(null, {getData})(Login))
