import DashboardOutlined from '@ant-design/icons';
import type { V2_MetaFunction } from '@remix-run/node';
import { Button, Card, Col, Dropdown, Layout, Menu, Row, theme } from 'antd';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Header style={{ backgroundColor: colorBgContainer }}>
        <Row justify="end">
          <Col>
            <Dropdown
              menu={{
                items: [{ key: 'signout', label: '退出', title: '退出' }],
              }}
            >
              <Button type="text">用户名</Button>
            </Dropdown>
          </Col>
        </Row>
      </Layout.Header>
      <Layout>
        <Layout.Sider theme="light">
          <Menu
            defaultSelectedKeys={['dashboard']}
            items={[
              {
                icon: <DashboardOutlined />,
                key: 'dashboard',
                label: '首页',
                title: '首页',
              },
            ]}
            mode="inline"
          />
        </Layout.Sider>
        <Layout>
          <Layout.Content>
            <Card bordered={false} loading={true} style={{ margin: 24 }}></Card>
          </Layout.Content>
          <Layout.Footer>Ant Design 5.x + Remix 1.x</Layout.Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}
