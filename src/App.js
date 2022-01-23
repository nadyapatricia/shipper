import React, { Suspense, lazy } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './index.css'; // import index.css here to override antd's styling

import {
  ShipperLogo,
  DesktopPageHeader,
  MobilePageHeader,
  NavigationBar,
  LoadingPage,
} from './components/index';

// Lazy-loaded imports
const Root = lazy(() => import('./Root'));

const { Header, Sider } = Layout;

export default function App() {
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
          <Header className='site-layout-sub-header-background'>
            <DesktopPageHeader />
            <MobilePageHeader />
          </Header>
          <Suspense fallback={<LoadingPage />}>
            <Root />
          </Suspense>
        </Layout>
      </Layout>
    </div>
  );
}
