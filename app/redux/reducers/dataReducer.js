/* jobs Reducer
 * handles jobs states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
  data: [],
  error: null,
};

export const dataReducer = createReducer(initialState, {
  [types.DATA_REQUEST](state, action) {
    return {
      ...state,
      data: action.payload,
      error: null,
    };
  },
  [types.DATA_SUCCESS](state, action) {
    return {
      ...state,
      data: action.payload,
      error: null,
    };
  },
  [types.DATA_FAILURE](state, action) {
    return {
      ...state,
      error: action.payload,
    };
  },
});

