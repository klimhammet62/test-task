import { GET_MEMBERS_DATA } from "types/DataTypes";


export const getMembersAction = (obj: any) => {
	return {
		type: GET_MEMBERS_DATA,
		payload: obj,
	};
};