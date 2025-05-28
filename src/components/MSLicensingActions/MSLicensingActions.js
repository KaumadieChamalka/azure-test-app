import React from 'react';
import { Card, Button } from 'antd';
import { SaveOutlined } from '@ant-design/icons';

const MSLicensingActions = () =>{
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
        }}
        block
      >
        Save MS Licensing Project
      </Button>
    </Card>   
  );
}

export default MSLicensingActions;
