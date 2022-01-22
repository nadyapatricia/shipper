import React from 'react';
import { Layout, Pagination } from 'antd';
import 'antd/dist/antd.css';
import './index.css'; // import index.css here to override antd's styling

import { ShipperLogo, PageHeader, NavigationBar } from './components/index';
import DesktopView from './pages/DesktopView';
import MobileView from './pages/MobileView';

export default function App() {
  const { Header, Content, Footer, Sider } = Layout;

  return (
    <div className='App'>
      <Layout style={{ height: '100vh' }}>
        <Sider theme='light' breakpoint='lg' collapsedWidth='0'>
          <ShipperLogo
            width={140}
            height={50}
            style={{ margin: '20px 0 0 20px' }}
          />
          <NavigationBar />
        </Sider>
        <Layout className='site-layout'>
          <Header
            className='site-layout-sub-header-background'
            style={{ padding: 0 }}
          />
          <Content style={{ margin: '24px', overflow: 'scroll' }}>
            <div className='site-layout-background'>
              <PageHeader />
              <DesktopView />
              <MobileView />
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
