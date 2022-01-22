import React, { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { Layout, Pagination } from 'antd';
import 'antd/dist/antd.css';
import './index.css'; // import index.css here to override antd's styling

import { DESKTOP_BREAKPOINT } from './constants';
import { getDriverData } from './redux/actions';
import {
  ShipperLogo,
  PageHeader,
  NavigationBar,
  LoadingPage,
} from './components/index';

// Lazy-loaded imports
const DesktopView = lazy(() => import('./pages/DesktopView'));
const MobileView = lazy(() => import('./pages/MobileView'));

const { Header, Content, Footer, Sider } = Layout;

export default function App() {
  const dispatch = useDispatch();
  const { drivers, isDriversLoading, totalCount, filterValues } = useSelector(
    (state) => state.driverManagement
  );

  useEffect(() => {
    dispatch(getDriverData());
  }, [dispatch]);

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
          <StyledContent>
            <div className='site-layout-background'>
              <PageHeader />
              <Suspense fallback={<LoadingPage />}>
                <DesktopView
                  isDriversLoading={isDriversLoading}
                  drivers={drivers}
                />
                <MobileView
                  isDriversLoading={isDriversLoading}
                  drivers={drivers}
                />
              </Suspense>
            </div>
          </StyledContent>
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

const StyledContent = styled(Content)`
  margin: 24px;
  overflow-y: scroll;

  ${DESKTOP_BREAKPOINT} {
    overflow-y: hidden;
  }
`;
