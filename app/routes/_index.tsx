import {
  BellOutlined,
  FolderOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import type { V2_MetaFunction } from '@remix-run/node';
import {
  Avatar,
  Breadcrumb,
  Button,
  Card,
  Col,
  Layout,
  Menu,
  Row,
  Space,
  Table,
  Typography,
  theme,
} from 'antd';
import React from 'react';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

interface DataType {
  key: React.Key;
  name: string;
  email: string;
  phoneNumber: string;
  position: string;
  jurisdiction: string;
}

const data: DataType[] = [];

for (let index = 0; index < 100; index++) {
  data.push({
    key: index,
    name: index.toString(),
    email: index.toString(),
    phoneNumber: index.toString(),
    position: index.toString(),
    jurisdiction: index.toString(),
  });
}

export default function Index() {
  const {
    token: {
      colorBgLayout,
      paddingMD,
      fontSizeXL,
      colorFill,
      padding,
    },
  } = theme.useToken();

  return (
    <Layout>
      <Layout.Header style={{ backgroundColor: colorBgLayout }}>
        <Row justify="space-between">
          <Col style={{ margin: 'auto 0' }}>
            <div
              style={{
                width: 120,
                height: 32,
                backgroundColor: colorFill,
              }}
            />
          </Col>
          <Col>
            <Space size="large">
              <BellOutlined />
              <QuestionCircleOutlined />
              <Avatar />
            </Space>
          </Col>
        </Row>
      </Layout.Header>
      <Layout>
        <Layout.Sider style={{ backgroundColor: colorBgLayout }}>
          <Menu
            defaultSelectedKeys={['User management']}
            defaultOpenKeys={['Dashboard']}
            items={[
              {
                icon: <FolderOutlined />,
                key: 'Dashboard',
                label: 'Dashboard',
                title: 'Dashboard',
                children: [
                  {
                    key: 'Form',
                    label: 'Form',
                    title: 'Form',
                  },
                  {
                    key: 'List',
                    label: 'List',
                    title: 'List',
                  },
                  {
                    key: 'User management',
                    label: 'User management',
                    title: 'User management',
                  },
                  {
                    key: 'Result',
                    label: 'Result',
                    title: 'Result',
                  },
                ],
              },
              {
                icon: <FolderOutlined />,
                key: 'Exception',
                label: 'Exception',
                title: 'Exception',
                children: [],
              },
              {
                icon: <FolderOutlined />,
                key: 'Account',
                label: 'Account',
                title: 'Account',
                children: [],
              },
              {
                icon: <FolderOutlined />,
                key: 'Editor',
                label: 'Editor',
                title: 'Editor',
                children: [],
              },
            ]}
            mode="inline"
            style={{
              backgroundColor: colorBgLayout,
              height: '100%',
              position: 'sticky',
              top: 0,
            }}
          />
        </Layout.Sider>
        <Layout>
          <Layout.Content style={{ padding: paddingMD }}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Breadcrumb
                items={[
                  { title: 'Ant Design' },
                  { title: 'Dashboard' },
                  { title: 'user management' },
                ]}
              />
              <Row justify="space-between">
                <Col>
                  <Typography.Text style={{ fontSize: fontSizeXL }}>
                    user management
                  </Typography.Text>
                </Col>
                <Col>
                  <Space>
                    <Button>Default Button</Button>
                    <Button type="primary">Primary Button</Button>
                  </Space>
                </Col>
              </Row>
              <Card bodyStyle={{ padding: 0 }}>
                <Table
                  columns={[
                    { dataIndex: 'name', title: 'Name' },
                    { dataIndex: 'email', title: 'E-mail' },
                    { dataIndex: 'phoneNumber', title: 'Phone number' },
                    { dataIndex: 'position', title: 'Position' },
                    { dataIndex: 'jurisdiction', title: 'Jurisdiction' },
                    {
                      key: 'operation',
                      title: 'Operation',
                      render: () => (
                        <Space>
                          <Button type="link">edit</Button>
                          <Button type="link">drop out</Button>
                        </Space>
                      ),
                    },
                  ]}
                  dataSource={data}
                  pagination={{
                    showSizeChanger: false,
                    style: { paddingRight: padding },
                  }}
                />
              </Card>
            </Space>
          </Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
