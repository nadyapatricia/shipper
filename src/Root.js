import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { Layout } from 'antd';

import { DESKTOP_BREAKPOINT } from './constants';
import { PageHeader, Pagination } from './components/index';
import DesktopView from './pages/DesktopView';
import MobileView from './pages/MobileView';
import { getDriverData, getTotalCount } from './redux/actions';

const { Content, Footer } = Layout;

export default function Root() {
  const dispatch = useDispatch();
  const { drivers, isDriversLoading, totalCount, filterValues } = useSelector(
    (state) => state.driverManagement
  );

  const { currentPage, pageLimit } = filterValues;

  useEffect(() => {
    dispatch(getDriverData());
    dispatch(getTotalCount());
  }, [dispatch]);

  return (
    <>
      <StyledContent>
        <div className='site-layout-background'>
          <PageHeader />
          <DesktopView isDriversLoading={isDriversLoading} drivers={drivers} />
          <MobileView isDriversLoading={isDriversLoading} drivers={drivers} />
        </div>
      </StyledContent>
      <Footer style={{ textAlign: 'center' }}>
        <Pagination
          totalCount={totalCount}
          pageLimit={pageLimit}
          currentPage={currentPage}
        />
      </Footer>
    </>
  );
}

const StyledContent = styled(Content)`
  margin: 24px;
  overflow-y: scroll;

  ${DESKTOP_BREAKPOINT} {
    overflow-y: hidden;
  }
`;
