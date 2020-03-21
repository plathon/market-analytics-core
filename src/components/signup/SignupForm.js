import React, { Component } from "react";

import { Form, Input, Select, Checkbox, Button } from "antd";

const { Option } = Select;

class NormalSignupForm extends Component {
  state = {
    confirmDirty: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, data) => {
      if (!err) this.props.signup(data);
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  validateAgreeTerms = (rule, value, callback) => {
    if (!value) {
      callback("You Most accept the terms!");
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "55"
    })(
      <Select style={{ width: 70 }}>
        <Option value="55">+55</Option>
      </Select>
    );

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item {...formItemLayout} label="Name">
          {getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: "Please input your Name!"
              }
            ]
          })(<Input />)}
        </Form.Item>

        <Form.Item {...formItemLayout} label="E-mail">
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "The input is not valid E-mail!"
              },
              {
                required: true,
                message: "Please input your E-mail!"
              }
            ]
          })(<Input />)}
        </Form.Item>

        <Form.Item {...formItemLayout} label="CPF">
          {getFieldDecorator("cpf", {
            rules: [
              {
                required: true,
                message: "Please input your CPF!"
              }
            ]
          })(<Input />)}
        </Form.Item>

        <Form.Item {...formItemLayout} label="Password">
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "Please input your password!"
              },
              {
                validator: this.validateToNextPassword
              }
            ]
          })(<Input type="password" />)}
        </Form.Item>

        <Form.Item {...formItemLayout} label="Confirm Password">
          {getFieldDecorator("confirm", {
            rules: [
              {
                required: true,
                message: "Please confirm your password!"
              },
              {
                validator: this.compareToFirstPassword
              }
            ]
          })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
        </Form.Item>

        <Form.Item {...formItemLayout} label="Phone Number (Whatsapp)">
          {getFieldDecorator("phone", {
            rules: [
              { required: true, message: "Please input your phone number!" }
            ]
          })(<Input addonBefore={prefixSelector} style={{ width: "100%" }} />)}
        </Form.Item>

        <Form.Item {...formItemLayout} label="State">
          {getFieldDecorator("state", {
            rules: [
              {
                required: true,
                message: "Please input your state!"
              }
            ]
          })(<Input />)}
        </Form.Item>

        <Form.Item {...formItemLayout} label="City">
          {getFieldDecorator("city", {
            rules: [
              {
                required: true,
                message: "Please input your city!"
              }
            ]
          })(<Input />)}
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator("agreement", {
            valuePropName: "checked",
            rules: [{ validator: this.validateAgreeTerms }]
          })(
            <Checkbox>
              I have read the <span>agreement</span>
            </Checkbox>
          )}
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button
            type="primary"
            htmlType="submit"
            loading={this.props.isLoading}
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalSignupForm = Form.create({ name: "normal_signup_form" })(
  NormalSignupForm
);
export default WrappedNormalSignupForm;
