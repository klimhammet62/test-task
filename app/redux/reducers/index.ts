import { combineReducers } from 'redux';
import { getMembersReducer } from './dataReducer';
import { loadMoreReducer } from './LoadMoreReducer';
import { toggleModalReducer } from './modalReducer';

export const RootReducer = combineReducers({
	membersData: getMembersReducer,
	loadMore: loadMoreReducer,
	toggleModal: toggleModalReducer,
});
