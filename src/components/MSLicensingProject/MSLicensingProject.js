import React from 'react';
import { Card, Row, Col, Form } from 'antd';
import CommonTextInput from '../CommonTextInput';
import CommonSelect from '../CommonSelect';
import CommonDatePicker from '../CommonDatePicker';
import CommonTextArea from '../CommonTextArea';
import CommonMultiSelect from '../CommonMultiSelect';

const MSLicensingProject = () => {
  const [form] = Form.useForm();

  return (
    <Card style={{ marginBottom: 24 }}>
    <h2><span style={{ marginRight: 8 }}><i className="anticon anticon-menu" /></span>MS Licensing Project Information</h2>
    <Form form={form} layout="vertical">
        <Row gutter={16}>
        <Col span={12}>
            <CommonTextInput name="projectName" label="MS Licensing Project Name" required placeholder="Project Name" />
        </Col>
        <Col span={12}>
            <CommonMultiSelect
            name="application"
            label="Application"
            required
            options={[
                { value: 'BC', label: 'BC' },
                { value: 'CRM', label: 'CRM' },
                { value: 'FSCM', label: 'FSCM' },
                { value: 'PBI', label: 'PBI' },
                { value: 'SFDC', label: 'SFDC' }
            ]}
            placeholder="Select Applications"
            />
        </Col>
        <Col span={12}>
            <CommonTextInput name="survey" label="Survey" required placeholder="Survey" disabled />
        </Col>
        <Col span={12}>
            <CommonTextInput name="gyde" label="GYDE365-Discover Account" placeholder="GYDE365-Discover Account" />
        </Col>
        <Col span={12}>
            <CommonDatePicker name="dueDate" label="Due Date" placeholder="Due Date" />
            <CommonSelect
            name="language"
            label="Language"
            required
            options={[{ value: 'en-uk', label: 'English (UK)' }, { value: 'nl', label: 'Nederands' }, { value: 'es', label: 'espanol' }, { value: 'en-us', label: 'English (US)' }]}
            placeholder="Language"
            />
        </Col>
        <Col span={12}>
            <CommonTextArea
            name="description"
            label="Description"
            placeholder="Description"
            rows={4}
            />
        </Col>
        </Row>
    </Form>
    </Card>
  );
}

export default MSLicensingProject;
