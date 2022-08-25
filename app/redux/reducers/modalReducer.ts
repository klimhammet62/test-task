import { IUser, OPEN_MODAL, CLOSE_MODAL } from '../../types/DataTypes';

const initState = {
	modal: false,
	memberData: {},
};

export const toggleModalReducer = (
	state = initState,
	action: { type: string; payload: IUser }
) => {
	switch (action.type) {
		case OPEN_MODAL:
			return { ...state, modal: !state.modal, memberData: action.payload };
		case CLOSE_MODAL:
			return { ...state, modal: false };
		default:
			return state;
	}
};
