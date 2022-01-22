import React from 'react';
import { Pagination } from 'antd';
import { useDispatch } from 'react-redux';
import { setFilters } from '../redux/actions';

export default function PaginationFooter({
  pageLimit,
  totalCount,
  currentPage,
}) {
  const dispatch = useDispatch();

  return (
    <Pagination
      showLessItems
      responsive
      current={currentPage}
      pageSize={pageLimit}
      total={totalCount}
      onChange={(page) => {
        dispatch(setFilters({ currentPage: page }));
      }}
    />
  );
}
