import React from 'react';
import { Form, Input } from 'antd';
//import PropTypes from 'prop-types';

const CommonTextArea = ({
  name,
  label,
  placeholder,
  required = false,
  rules = [],
  disabled = false,
  rows = 4,
  ...restProps
}) => {
  return (
    <Form.Item
      label={
        <span>
          {label}
          {required && <span style={{ color: 'red', marginLeft: 4 }}>*</span>}
        </span>
      }
      name={name}
      rules={rules}
    >
      <Input.TextArea
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        {...restProps}
      />
    </Form.Item>
  );
};

// CommonTextArea.propTypes = {
//   name: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   placeholder: PropTypes.string,
//   required: PropTypes.bool,
//   rules: PropTypes.array,
//   disabled: PropTypes.bool,
//   rows: PropTypes.number,
// };

export default CommonTextArea; 