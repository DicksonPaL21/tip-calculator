import shortid from 'shortid';
import * as types from './types';

const actions = {
  add: (newData, cb = false) => (dispatch) => {
    let data = newData;

    if (!newData.id) {
      data = { ...data, id: shortid.generate() };
    }

    dispatch({ type: types.ADD_ACTION_TYPE, data });
    if (cb) cb(true);
  },

  deleteById: (id, cb = false) => (dispatch) => {
    dispatch({ type: types.DELETE_ACTION_TYPE, id });
    if (cb) cb(true);
  },
};

export default actions;
