import React, { useState } from 'react';
import { Modal, Form, Input, Upload, Button, Typography } from 'antd';
import { CloudUploadOutlined, PlusOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css'; // or 'antd/dist/antd.css' for older versions
import './App.css';

const { Text } = Typography;

const RowFormInput = ({ label, name, placeholder, required = false, rules = [], inputId, disabled = false }) => (
  <Form.Item>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
      <label style={{ width: 120, marginRight: 8, fontWeight: 500 }} htmlFor={inputId}>
        {label}{required && <span style={{ color: 'red' }}>*</span>}
      </label>
      <Form.Item name={name} noStyle rules={rules}>
        <Input id={inputId} style={{ flex: 1}} placeholder={placeholder} disabled={disabled} />
      </Form.Item>
    </div>
  </Form.Item>
);

function App() {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const handleOk = () => {
    form.validateFields().then(values => {
      // handle upload logic here
      setVisible(false);
    });
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div className="App">
      <Button
        type="primary"
        icon={<PlusOutlined />}
        style={{
          background: '#51A7F9',
          borderColor: '#A4D3F7',
          color: '#fff',
          borderRadius: 12,
          fontWeight: 400,
          fontSize: 22,
          padding: '0 32px',
          height: 48,
          display: 'flex',
          alignItems: 'center',
          boxShadow: 'none',
          borderWidth: 3,
        }}
        onClick={() => setVisible(true)}
      >
        Add File
      </Button>
      <Modal
        title="MS Licensing File Upload"
        open={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="upload" type="primary" onClick={handleOk}>
            Upload
          </Button>,
        ]}
      >
        <Form
          form={form}
          layout="vertical"
          requiredMark="optional"
        >
          <RowFormInput
            label="File Name"
            name="fileName"
            placeholder="File Name"
            inputId="fileNameInput"
            disabled={true}
          />
          <RowFormInput
            label="File Description"
            name="fileDescription"
            placeholder="File Description"
            inputId="fileDescriptionInput"
            required={true}
            rules={[{ required: true, message: 'Please enter a file description' }]}
          />
          <Form.Item
            label={<span style={{ fontWeight: 500 }}>
              Upload a File<span style={{ color: 'red' }}>*</span>
            </span>}
            name="file"
            rules={[{ required: true, message: 'Please upload a file' }]}
            style={{ fontWeight: 500 }}
          >
            <Upload.Dragger
              name="file"
              accept=".docx,.xlsx"
              beforeUpload={() => false} // Prevent auto upload
              showUploadList={false}
            >
              <p>
                <CloudUploadOutlined style={{ fontSize: 32, color: '#bfbfbf' }} />
              </p>
              <Button type="primary">Choose a file to Upload</Button>
              <div style={{ margin: '8px 0' }}>or drag and drop it here</div>
              <Text type="secondary">Supported formats docx and xlsx</Text>
            </Upload.Dragger>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default App;
