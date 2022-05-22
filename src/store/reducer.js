import * as types from './types';

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ACTION_TYPE: {
      const newData = [...state.data, action.data];
      return { ...state, data: newData };
    }
    case types.DELETE_ACTION_TYPE: {
      const dataCopy = state.data;
      const newData = dataCopy.filter((dd) => dd.id !== action.id);
      return { ...state, data: newData };
    }
    default:
      return state;
  }
};

export default reducer;
