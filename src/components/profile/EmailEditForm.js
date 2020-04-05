import React from "react";
import { Form, Input, Button, Row, Col } from "antd";

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

const EmailEditForm = ({ isLoading, handlerEditEmail }) => {
  const [form] = Form.useForm();

  const onFinish = values => handlerEditEmail(values);

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: "55"
      }}
      scrollToFirstError
    >
      <p>Update your email address</p>

      <Form.Item label="E-mail">
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              name="email"
              noStyle
              rules={[
                {
                  required: true,
                  message: "Please input the captcha you got!"
                },
                {
                  type: "email",
                  message: "The input is not valid E-mail!"
                }
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Button loading={isLoading}>Update</Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default EmailEditForm;
