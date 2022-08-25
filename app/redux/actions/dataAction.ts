import {
	GET_MEMBERS_DATA,
	IUser,
	LOAD_MORE_BUTTON,
	OPEN_MODAL,
	CLOSE_MODAL,
} from 'types/DataTypes';

export const getMembersAction = (obj: { members: IUser } | {}) => {
	return {
		type: GET_MEMBERS_DATA,
		payload: obj,
	};
};
export const setPageAction = () => {
	return {
		type: LOAD_MORE_BUTTON,
	};
};

export const openModalAction = (obj: IUser) => {
	return {
		type: OPEN_MODAL,
		payload: obj,
	};
};
export const closeModalAction = () => {
	return {
		type: CLOSE_MODAL,
	};
};
