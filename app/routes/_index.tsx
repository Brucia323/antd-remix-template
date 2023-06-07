import type { V2_MetaFunction } from '@remix-run/node';
import { Card, Layout, theme } from 'antd';

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
      <Layout.Header
        style={{ backgroundColor: colorBgContainer }}
      ></Layout.Header>
      <Layout>
        <Layout.Sider theme="light"></Layout.Sider>
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
