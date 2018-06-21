import React from 'react'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Form, Input, Button, Cascader } from 'antd'
import { setPersonalInfo } from '../actions'
const FormItem = Form.Item

class Main extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      const { getFieldDecorator } = this.props.form;
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 6 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 14 },
        },
      }
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 14,
            offset: 6,
          },
        },
      }
      const occupations = [
        {
          value: '初中生',
          label: '初中生',
        },
        {
          value: '高中生',
          label: '高中生',
        },
        {
          value: '在职',
          label: '在职',
        },
        {
          value: '其他',
          label: '其他',
        },
      ]
      const genders = [
        {
          value: '男',
          label: '男',
        },
        {
          value: '女',
          label: '女',
        },
      ]

      const handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            const { nickname, age, occupation, mobile } = values
            this.props.setPersonalInfo({ nickname, age, occupation: occupation.toString(), mobile })
            this.props.history.push('/examinationPaper')
            // console.log('Received values of form: ', values)
          }
        })
      }
      return (
        <Form onSubmit={handleSubmit}>
          <FormItem
            {...formItemLayout}
            label={(
              <span>
                姓名
              </span>
            )}
            hasFeedback
          >
            {getFieldDecorator('nickname', {
              rules: [{ required: true, message: '请输入姓名!' }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={(
              <span>
                年龄
              </span>
            )}
            hasFeedback
          >
            {getFieldDecorator('age', {
              rules: [{ required: true, message: '请输入年龄!' }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="性别"
          >
            {getFieldDecorator('gender', {
              rules: [{ type: 'array', required: true, message: '请选择性别!' }],
            })(
              <Cascader options={genders} />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="职业"
          >
            {getFieldDecorator('occupation', {
              rules: [{ type: 'array', required: true, message: '请选择你的职业!' }],
            })(
              <Cascader options={occupations} />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={(
              <span>
                电话
              </span>
            )}
            hasFeedback
          >
            {getFieldDecorator('mobile')(
              <Input />
            )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" size="large">开始测试</Button>
          </FormItem>
        </Form>
      )
    }
}

export default withRouter(connect(null, { setPersonalInfo })(Form.create()(Main)))
