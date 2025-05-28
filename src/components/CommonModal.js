import React from 'react';
import { Modal } from 'antd';
//import PropTypes from 'prop-types';
import CommonButton from './CommonButton';

const CommonModal = ({
  title,
  open,
  onOk,
  onCancel,
  children,
  width = 520,
  okText = 'Save',
  cancelText = 'Cancel',
  okButtonProps = {},
  cancelButtonProps = {},
  footer = null,
  ...restProps
}) => {
  const defaultFooter = [
    <CommonButton key="cancel" onClick={onCancel} {...cancelButtonProps}>
      {cancelText}
    </CommonButton>,
    <CommonButton key="submit" type="primary" onClick={onOk} {...okButtonProps}>
      {okText}
    </CommonButton>,
  ];

  return (
    <Modal
      title={title}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      width={width}
      footer={footer || defaultFooter}
      {...restProps}
    >
      {children}
    </Modal>
  );
};

// CommonModal.propTypes = {
//   title: PropTypes.string.isRequired,
//   open: PropTypes.bool.isRequired,
//   onOk: PropTypes.func.isRequired,
//   onCancel: PropTypes.func.isRequired,
//   children: PropTypes.node.isRequired,
//   width: PropTypes.number,
//   okText: PropTypes.string,
//   cancelText: PropTypes.string,
//   okButtonProps: PropTypes.object,
//   cancelButtonProps: PropTypes.object,
//   footer: PropTypes.node,
// };

export default CommonModal; 