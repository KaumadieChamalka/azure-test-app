import React from 'react';
import { Form, Upload, Typography } from 'antd';
import { CloudUploadOutlined, DeleteOutlined } from '@ant-design/icons';
import CommonModal from '../CommonModal';
import CommonButton from '../CommonButton';
import CommonTextInput from '../CommonTextInput';

const { Text } = Typography;

const MSLicensingFileUploadModal = ({visible, handleCancel, handleOk, form, holdFileOnModal, setHoldFileOnModal, handleFileChange}) => {
  const handleDeleteFile = () => {
    setHoldFileOnModal({});
    form.resetFields(["fileName"]);
  };
  return (
    <CommonModal
      title="MS Licensing File Upload"
      open={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <CommonButton onClick={handleCancel}>
          Cancel
        </CommonButton>,
        <CommonButton type="primary" onClick={handleOk}>
          Upload
        </CommonButton>,
      ]}
    >
        <Form form={form} initialValues={{ uploadFileControl: null }}>
          <CommonTextInput
            label="File Name"
            name="fileName"
            placeholder="File Name"
            disabled={true}
          />
          <CommonTextInput
            label="File Description"
            name="fileDescription"
            placeholder="File Description"
            value={""}
            onChange={() => {}}
            required
          />
          <Form.Item
            name={"uploadFileControl"}
            //label={'Upload a File'}
            rules={[{ required: true, message: 'This field is required!' }]}
            required={true}
          >
            <Upload.Dragger
              name="file"
              accept=".docx,.xlsx"
              beforeUpload={() => false} // Prevent auto upload
              showUploadList={false}
              onChange={handleFileChange}
            >
              <p>
                <CloudUploadOutlined style={{ fontSize: 32, color: '#bfbfbf' }} />
              </p>
              <CommonButton type="primary">Choose a file to Upload</CommonButton>
              <div style={{ margin: '8px 0' }}>or drag and drop it here</div>
              <Text type="secondary">Supported formats docx and xlsx</Text>
            </Upload.Dragger>
          </Form.Item>
            {/* Uploaded file UI - only show if a file is selected */}
            {Object.keys(holdFileOnModal).length > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', marginTop: 32 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, color: '#555', marginBottom: 0 }}>
                    Uploaded MS Licensing
                  </div>
                  <div style={{ color: '#bbb', marginTop: 0 }}>
                    {holdFileOnModal?.name}
                  </div>
                </div>
                <DeleteOutlined style={{ color: '#F08080', cursor: 'pointer' }} onClick={handleDeleteFile} />
              </div>
            )}
        </Form>

    </CommonModal>
  );
};

export default MSLicensingFileUploadModal; 