import { DRIVER_MANAGEMENT_ACTIONS } from './types';

const initialState = {
  drivers: [],
  isDriversLoading: false,
  totalCount: 0,
  filterValues: {
    currentPage: 1,
    pageLimit: 5,
    searchString: '',
  },
};

export const driverManagement = (state = initialState, action) => {
  switch (action.type) {
    case DRIVER_MANAGEMENT_ACTIONS.GET_DRIVER:
      return {
        ...state,
        drivers: action.drivers,
      };

    case DRIVER_MANAGEMENT_ACTIONS.GET_TOTAL_COUNT_DRIVER:
      return {
        ...state,
        totalCount: action.totalCount,
      };

    case DRIVER_MANAGEMENT_ACTIONS.SET_IS_DRIVER_DATA_LOADING:
      return {
        ...state,
        isDriversLoading: action.isDriversLoading,
      };

    case DRIVER_MANAGEMENT_ACTIONS.SET_FILTERS: {
      const { filterValuesObject } = action;

      const newTabFilterValues = {
        ...state.filterValues,
      };

      Object.keys(filterValuesObject).forEach((key) => {
        newTabFilterValues[key] = filterValuesObject[key];
      });

      return {
        ...state,
        filterValues: {
          ...newTabFilterValues,
        },
      };
    }

    default:
      return state;
  }
};
