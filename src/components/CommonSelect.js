import React from "react";
import { Form, Select } from 'antd';

const CommonSelect = ({
  name, label, required, placeholder, options = [], disabled, ...rest
}) => (
  <Form.Item
    name={name}
    label={label}
    rules={required ? [{ required: true, message: 'This field is required!' }] : []}
  >
    <Select placeholder={placeholder} disabled={disabled} {...rest}>
      {options.map(opt => (
        <Select.Option key={opt.value} value={opt.value}>{opt.label}</Select.Option>
      ))}
    </Select>
  </Form.Item>
);

export default CommonSelect;