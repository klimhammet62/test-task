import { GET_MEMBERS_DATA } from '../../types/DataTypes';

const initState = {
	members: [],
};

export const getMembersReducer = (
	state = initState,
	action: { type: string; payload: boolean }
) => {
	switch (action.type) {
		case GET_MEMBERS_DATA:
			return { ...state, members: action.payload };

		default:
			return state;
	}
};
