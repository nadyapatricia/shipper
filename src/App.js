import React from 'react';
import styled from '@emotion/styled';
import { Layout, Menu, Pagination } from 'antd';
import { HomeFilled, UserOutlined, CalendarOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './index.css';

import { DESKTOP_BREAKPOINT } from './constants';
import ShipperLogo from './components/ShipperLogo';
import PageHeader from './components/PageHeader';
import DesktopCard from './components/DesktopCard';
import MobileCard from './components/MobileCard';

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
        <Layout className='site-layout'>
          <Header
            className='site-layout-sub-header-background'
            style={{ padding: 0 }}
          />
          <Content style={{ margin: '24px', overflow: 'scroll' }}>
            <div className='site-layout-background'>
              <PageHeader />
              <DesktopCardContainer>
                <DesktopCard />
                <DesktopCard />
                <DesktopCard />
                <DesktopCard />
                <DesktopCard />
              </DesktopCardContainer>
              <MobileCardContainer>
                <MobileCard />
                <MobileCard />
                <MobileCard />
                <MobileCard />
                <MobileCard />
              </MobileCardContainer>
            </div>
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

const DesktopCardContainer = styled.div`
  display: none;

  ${DESKTOP_BREAKPOINT} {
    display: flex;
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
    margin-top: 20px;
  }
`;

const MobileCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  height: 100%;

  ${DESKTOP_BREAKPOINT} {
    display: none;
  }
`;
