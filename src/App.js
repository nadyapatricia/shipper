import React from 'react';
import { Layout, Menu, Pagination } from 'antd';
import { HomeFilled, UserOutlined, CalendarOutlined } from '@ant-design/icons';
import './index.css';
import ShipperLogo from './components/ShipperLogo';
import PageHeader from './components/PageHeader';

const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <div className='App'>
      <Layout style={{ height: '100vh' }}>
        <Sider theme='light' breakpoint='lg' collapsedWidth='0'>
          <ShipperLogo
            width={140}
            height={50}
            style={{ margin: '20px 0 0 20px' }}
          />
          <Menu mode='inline' defaultSelectedKeys={['2']}>
            <Menu.Item key='1' icon={<HomeFilled />}>
              Beranda
            </Menu.Item>
            <Menu.Item key='2' icon={<UserOutlined />}>
              Driver Management
            </Menu.Item>
            <Menu.Item key='3' icon={<CalendarOutlined />}>
              Pickup
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            className='site-layout-sub-header-background'
            style={{ padding: 0 }}
          />
          <Content style={{ margin: '24px' }}>
            <PageHeader />
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            <Pagination
              showLessItems
              responsive
              defaultCurrent={1}
              pageSize={5}
              total={30}
            />
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
