import React from 'react';
import { Form, Select } from 'antd';
import PropTypes from 'prop-types';

const CommonMultiSelect = ({
  name,
  label,
  placeholder,
  required = false,
  disabled = false,
  options = [],
  mode = 'multiple',
  maxTagCount = 'responsive',
  ...restProps
}) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={required ? [{ required: true, message: 'This field is required!' }] : []}
    >
      <Select
        mode={mode}
        placeholder={placeholder}
        disabled={disabled}
        options={options}
        maxTagCount={maxTagCount}
        style={{ width: '100%' }}
        {...restProps}
      />
    </Form.Item>
  );
};

CommonMultiSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  rules: PropTypes.array,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  mode: PropTypes.string,
  maxTagCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default CommonMultiSelect; 