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
        <div>
          <div style={{ margin: '30px' }}>
            <h2 style={{ textAlign: 'center' }}>MBTI性格类型测试问卷</h2>
            <div>注意事项：</div>
            <div>1．请在心态平和及时间充足的情况下才开始答题。</div>
            <div>2．每道题目均有两个答案：A和B。请仔细阅读题目，按照与你性格相符的程度分别给A和B赋予一个分数，并使一组中的两个分数之和为5。最后，请在问题后相应的方格内填上相应的分数。</div>
            <div>3．请注意，题目的答案无对错之分，你不需要考虑哪个答案“应该”更好，而且不要在任何问题上思考太久，而是应该凭你心里的第一反应做出选择。</div>
            <div>4．如果你觉得在不同的情境里，两个答案或许都能反映你的倾向，请选择一个对于你的行为方式来说最自然、最顺畅和最从容的答案。
              <br />例子：“你参与社交聚会时”
              <br />A．总是能认识新朋友。（4）
              <br />B．只跟几个亲密挚友呆在一起。（1）
              <br />很明显，你参与社交聚会时有时能认识新朋友，有时又会只跟几个亲密挚友呆在一起，在以上的例子中，我们给总是能认识新朋友打了4分，而给只跟几个亲密挚友呆在一起打了1分。当然，在你看来，也可能是3+2或者5+0，也可以是其他的组合。</div>
          </div>
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
        </div>
      )
    }
}

export default withRouter(connect(null, { setPersonalInfo })(Form.create()(Main)))
