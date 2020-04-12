import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const EmailEditForm = ({
  isLoading,
  handleEditEmail,
  userEmail,
  isReceivingInitData,
}) => {
  const [form] = Form.useForm();

  const onFinish = (values) => handleEditEmail(values);

  if (isReceivingInitData) {
    return <LoadingOutlined />;
  } else {
    return (
      <Form
        {...formItemLayout}
        form={form}
        name="emailEdit"
        onFinish={onFinish}
        initialValues={{
          email: userEmail,
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
                    message: "Please input the captcha you got!",
                  },
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                ]}
              >
                <Input disabled />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Button loading={isLoading} disabled>
                Update
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    );
  }
};

export default EmailEditForm;
