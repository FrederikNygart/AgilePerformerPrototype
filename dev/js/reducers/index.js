import {combineReducers} from 'redux';
import teamReducer from './team_reducers';
import viewReducer from './view_reducers';
import userReducer from './user_reducer';
/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    teams: teamReducer,
    view: viewReducer,
    user: userReducer
});

export default allReducers