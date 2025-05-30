import React from 'react';
import { Card, Button } from 'antd';
import { SaveOutlined, RocketOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const MSLicensingActions = () => {
  const navigate = useNavigate();

  const handleGoToNext = () => {
    navigate('/next-screen');
  };

  return (
    <Card>
      <Button
        type="primary"
        icon={<SaveOutlined />}
        iconPosition="end"
        style={{
          background: '#33A8FF',
          borderColor: '#33A8FF',
          color: '#fff',
          borderRadius: 8,
          fontWeight: 600,
          fontSize: 14,
          height: 34,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          marginBottom: 16
        }}
        block
      >
        Save MS Licensing Project
      </Button>
      <Button
        type="primary"
        icon={<RocketOutlined />}
        iconPosition="end"
        onClick={handleGoToNext}
        style={{
          background: '#52c41a',
          borderColor: '#52c41a',
          color: '#fff',
          borderRadius: 8,
          fontWeight: 600,
          fontSize: 14,
          height: 34,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
        }}
        block
      >
        Go to Next
      </Button>
    </Card>
  );
};

export default MSLicensingActions;
