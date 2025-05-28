import React from "react";
import { Form, Input } from 'antd';

const CommonTextInput = ({
  name, label, required, placeholder, disabled, ...rest
}) => (
  <Form.Item
    name={name}
    label={label}
    rules={required ? [{ required: true, message: 'This field is required!' }] : []}
  >
    <Input placeholder={placeholder} disabled={disabled} {...rest} />
  </Form.Item>
);

export default CommonTextInput;