import React from "react";
import { Form, DatePicker } from 'antd';

const CommonDatePicker = ({
  name, label, required, placeholder, disabled, ...rest
}) => (
  <Form.Item
    name={name}
    label={label}
    rules={required ? [{ required: true, message: 'This field is required!' }] : []}
  >
    <DatePicker placeholder={placeholder} disabled={disabled} style={{ width: '100%' }} {...rest} />
  </Form.Item>
);

export default CommonDatePicker;