/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as dataReducer from './dataReducer';

export default Object.assign( loadingReducer, dataReducer);
