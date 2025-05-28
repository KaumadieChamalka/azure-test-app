import React from "react";
import { Button } from 'antd';

const CommonButton = ({ children, ...rest }) => (
  <Button {...rest}>{children}</Button>
);

export default CommonButton;