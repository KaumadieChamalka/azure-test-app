import React, { useState} from 'react';
import { Card, Form } from 'antd';
import { PlusOutlined, DeleteOutlined, FileWordOutlined, FileExcelOutlined } from '@ant-design/icons';
import CommonButton from '../CommonButton';
import CommonTable from '../CommonTable';
import MSLicensingFileUploadModal from '../MSLicensingFileUploadModal/MSLicensingFileUploadModal';
import CommonModal from '../CommonModal';
//import { msLicensingService } from '../../services/msLicensingService';

const fileTypeIcon = (type) => {
  if (type === 'word') return <FileWordOutlined style={{ color: '#2B579A', fontSize: 22 }} />;
  if (type === 'excel') return <FileExcelOutlined style={{ color: '#217346', fontSize: 22 }} />;
  return null;
};

const MSLicensingFiles = () => {
    const [form] = Form.useForm();
    const [visible, setVisible] = useState(false);
    const [holdFileOnModal, setHoldFileOnModal] = useState({});
    const [fileData, setFileData] = useState([
        {
          id: 1,
          name: 'word-27-05-2025_11:19:21',
          type: 'word',
          uploadedBy: 'Lahiru Madusanka',
          uploadedDate: '2025-05-27',
        },
        {
          id: 2,
          name: 'excel-27-05-2025_11:18:45',
          type: 'excel',
          uploadedBy: 'Lahiru Madusanka',
          uploadedDate: '2025-05-27',
        },
    ]);
    const [isDeletedModalOpen, setIsDeletedModalOpen] = useState(false);
    const [fileId, setFileId] = useState("");

  const columns = [
    { title: 'File Name', dataIndex: 'name', key: 'name' },
    { title: 'File Type', dataIndex: 'type', key: 'type', render: fileTypeIcon },
    { title: 'Uploaded By', dataIndex: 'uploadedBy', key: 'uploadedBy' },
    { title: 'Uploaded Date', dataIndex: 'uploadedDate', key: 'uploadedDate' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => <DeleteOutlined style={{ color: '#F08080', cursor: 'pointer' }} onClick={() => handleDeleteFileConfirmation(record)}/>,
    },
  ];

  const handleDeleteFileConfirmation = (record) => {
    setIsDeletedModalOpen(true);
    setFileId(record.id);
  }

  const handleRemoveFile = async (fileId) => {
    // try {
    //   await msLicensingService.deleteFile(fileId);
    //   // Handle success (e.g., show success message, update UI)
    //   setFileData(prevData => prevData.filter(item => item.id !== fileId));
    //   setFileId("");
    //   setIsDeletedModalOpen(false);
    // } catch (error) {
    //   // Handle error (e.g., show error message)
    //   console.error('Error deleting file:', error);
    // }
    setFileData(prevData => prevData.filter(item => item.id !== fileId));
    setFileId("");
    setIsDeletedModalOpen(false);
  };

  const handleCancel = () => {
    form.resetFields();
    setVisible(false);
    setHoldFileOnModal({});
  };

  const handleOk = () => {
    form.validateFields()
      .then(values => {
        // handle upload logic here
        // fileData.push({
        //   key: fileData.length + 1,
        //   name: values.fileName,
        //   type: values.fileType,
        //   uploadedBy: values.uploadedBy,
        //   uploadedDate: values.uploadedDate,
        // });
        fileData.push({
          id: fileData.length + 1,
          name: 'word-28-05-2025_08:19:21',
          type: 'word',
          uploadedBy: 'Lahiru Madusanka',
          uploadedDate: '2025-05-28',
        });
        form.resetFields();
        setVisible(false);
        setHoldFileOnModal({});
      })
      .catch(() => {
        // Validation failed, errors will be displayed by antd
      });
  };

  const handleFileChange = (info) => {
    if (info.file) {
        setHoldFileOnModal(info.file);
        form.setFieldValue(["fileName"], info.file.name);
    } else {
        form.resetFields(["uploadFileControl"]);
        setHoldFileOnModal({})
    }
  };

  return (
    <>
      <Card
        title={<span><i className="anticon anticon-menu" style={{ marginRight: 8 }} />MS Licensing Files</span>}
        extra={
          <CommonButton type="primary" icon={<PlusOutlined />} onClick={() => setVisible(true)}>
            Add File
          </CommonButton>
        }
      >
        <CommonTable
          columns={columns}
          dataSource={fileData}
        />
      </Card>
      <MSLicensingFileUploadModal
        visible={visible}
        form={form}
        handleCancel={handleCancel}
        handleOk={handleOk}
        holdFileOnModal={holdFileOnModal}
        setHoldFileOnModal={setHoldFileOnModal}
        handleFileChange={handleFileChange}
      />
      <CommonModal
        title={'Delete'}
        open={isDeletedModalOpen}
        onCancel={() => {
          setIsDeletedModalOpen(false);
          setFileId("");
        }}
        footer={
          <>
            <CommonButton
              type={null}
              onClick={() => {
                setIsDeletedModalOpen(false);
                setFileId("");
              }}
            >
              {'Cancel'}
            </CommonButton>
            <CommonButton
              onClick={async () => {
                await handleRemoveFile(fileId);
              }}
              type="primary"
            >
              {'OK'}
            </CommonButton>
          </>
        }
      >
        <div>{'Are you sure you want to delete this file?'}</div>
      </CommonModal>
    </>
  );
}

export default MSLicensingFiles;
