import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom'

class NormalResetPasswordForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                //const { email } = values
                console.log(values)
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
        <Form onSubmit={this.handleSubmit} className="login-form">

            <Form.Item label="E-mail">
              {getFieldDecorator('email', {
                rules: [{
                  type: 'email', message: 'The input is not valid E-mail!',
                }, {
                  required: true, message: 'Please input your E-mail!',
                }],
              })(
                <Input />
              )}
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" loading={true}>
                    Reset Password
                </Button> Or <Link to="/signin">Sign in now!</Link>
            </Form.Item>
        </Form>
        );
    }

}

const WrappedNormalResetPasswordForm = Form.create({ name: 'reset_password_form' })(NormalResetPasswordForm);
export default WrappedNormalResetPasswordForm
