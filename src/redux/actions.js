import axios from 'axios';
import { DRIVER_MANAGEMENT_ACTIONS } from './types';
import { BASE_URL } from '../constants';

export const getDriverData = () => (dispatch, getState) => {
  dispatch({
    type: DRIVER_MANAGEMENT_ACTIONS.SET_IS_DRIVER_DATA_LOADING,
    isDriversLoading: true,
  });

  const { currentPage, pageLimit, searchString } =
    getState().driverManagement.filterValues;

  const subRoute = `?search=${encodeURIComponent(
    searchString
  )}&page=${currentPage}&limit=${pageLimit}`;

  axios
    .get(`${BASE_URL}${subRoute}`)
    .then(({ data }) => {
      // handle success
      dispatch({
        type: DRIVER_MANAGEMENT_ACTIONS.GET_DRIVER,
        drivers: data,
        totalCount: data.length,
      });
    })
    .catch(() => {
      // handle error
      dispatch({
        type: DRIVER_MANAGEMENT_ACTIONS.GET_DRIVER,
        drivers: [],
        totalCount: 0,
      });
    })
    .finally(() => {
      // always executed
      dispatch({
        type: DRIVER_MANAGEMENT_ACTIONS.SET_IS_DRIVER_DATA_LOADING,
        isDriversLoading: false,
      });
    });
};

export const setFilters = (filterValuesObject) => (dispatch) => {
  dispatch({
    type: DRIVER_MANAGEMENT_ACTIONS.SET_FILTERS,
    filterValuesObject,
  });

  let resetCurrentPage = true;
  if ('currentPage' in filterValuesObject) {
    resetCurrentPage = false;
  }
  dispatch(refreshDriversData(resetCurrentPage));
};

export const refreshDriversData =
  (resetPage = true) =>
  (dispatch) => {
    if (resetPage) {
      dispatch({
        type: DRIVER_MANAGEMENT_ACTIONS.SET_FILTERS,
        filterValuesObject: { currentPage: 1 },
      });
    }
    dispatch(getDriverData());
  };
