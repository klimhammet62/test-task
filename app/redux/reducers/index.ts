import { combineReducers } from 'redux';
import { getMembersReducer } from './dataReducer';
import { loadMoreReducer } from './LoadMoreReducer';

export const RootReducer = combineReducers({
	membersData: getMembersReducer,
	loadMore: loadMoreReducer,
});
