import React from "react";
import { Form, Input, Button } from "antd";
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
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const ProfileEditForm = ({
  isLoading,
  handleUpdateProfile,
  userName,
  userPhone,
  isReceivingInitData,
}) => {
  const [form] = Form.useForm();

  const onFinish = (values) => handleUpdateProfile(values);

  if (isReceivingInitData) {
    return <LoadingOutlined />;
  } else {
    return (
      <Form
        {...formItemLayout}
        form={form}
        name="profileEdit"
        onFinish={onFinish}
        scrollToFirstError
        initialValues={{
          name: userName,
          phone: userPhone,
        }}
      >
        <p>Update your profile</p>

        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input disabled={isLoading} />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input disabled={isLoading} />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Update
          </Button>
        </Form.Item>
      </Form>
    );
  }
};

export default ProfileEditForm;
