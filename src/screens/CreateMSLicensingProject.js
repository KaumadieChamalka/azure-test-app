import React from 'react';
import { Row, Col } from 'antd';
import MSLicensingProject from '../components/MSLicensingProject/MSLicensingProject';
import MSLicensingFiles from '../components/MSLicensingFiles/MSLicensingFiles';
import MSLicensingActions from '../components/MSLicensingActions/MSLicensingActions';

const CreateMSLicensingProject = () => {

  return (
    <div style={{ padding: 50, background: '#f7f9fb', minHeight: '73vh' }}>
      <Row gutter={20}>
        <Col span={18}>
          <MSLicensingProject />
          <MSLicensingFiles />
        </Col>

        <Col span={6}>
          <MSLicensingActions />
        </Col>
      </Row>
    </div>
  );
};

export default CreateMSLicensingProject;