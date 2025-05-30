import React, { useState } from 'react';
import { Card, Typography, Input, Select } from 'antd';
import CommonTable from '../components/CommonTable';

const { Title } = Typography;

const NextScreen = () => {
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: 'Project 1',
      application: 'BC',
      comment: 'Comment 1',
    },
    {
      id: 2,
      name: 'Project 2',
      application: 'CRM',
      comment: 'Comment 2',
    },
  ]);

  const applicationOptions = [
    { value: 'BC', label: 'BC' },
    { value: 'CRM', label: 'CRM' },
    { value: 'FSCM', label: 'FSCM' },
    { value: 'PBI', label: 'PBI' },
    { value: 'SFDC', label: 'SFDC' }
  ];

  const handleEdit = (record, field, value) => {
    const newData = dataSource.map(item => {
      if (item.id === record.id) {
        return { ...item, [field]: value };
      }
      return item;
    });
    setDataSource(newData);
  };

  const columns = [
    {
      title: 'Project Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <Input
          name={`name-${record.id}`}
          value={text}
          defaultValue={text}
          onChange={(e) => handleEdit(record, 'name', e.target.value)}
          style={{ width: '100%' }}
        />
      ),
    },
    {
      title: 'Application',
      dataIndex: 'application',
      key: 'application',
      render: (text, record) => (
        <Select
          name={`application-${record.id}`}
          value={text}
          defaultValue={text}
          options={applicationOptions}
          onChange={(value) => handleEdit(record, 'application', value)}
          style={{ width: '100%' }}
        />
      ),
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
      key: 'comment',
      render: (text, record) => (
        <Input
          name={`comment-${record.id}`}
          value={text}
          defaultValue={text}
          onChange={(e) => handleEdit(record, 'comment', e.target.value)}
          style={{ width: '100%' }}
        />
      ),
    },
  ];

  return (
    <div style={{ padding: 50, background: '#f7f9fb', minHeight: '73vh' }}>
      <Card>
        <Title level={2}>Next Screen</Title>
        <CommonTable 
          columns={columns} 
          dataSource={dataSource}
          size="small"
        />
      </Card>
    </div>
  );
};

export default NextScreen; 