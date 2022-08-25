import { LOAD_MORE_BUTTON } from '../../types/ButtonTypes';

const initState = {
	page: 4,
};

export const loadMoreReducer = (
	state = initState,
	action: { type: string }
) => {
	switch (action.type) {
		case LOAD_MORE_BUTTON:
			return { ...state, page: state.page + 4 };

		default:
			return state;
	}
};
