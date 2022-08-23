import { LOAD_MORE_BUTTON } from "../../types/ButtonTypes";

const initState = {
    loadMore: 0,
};

export const loadMoreReducer = (state = initState, action: any) => {
    switch (action.type) {
        case LOAD_MORE_BUTTON:
            return { ...state, loadMore: action.payload };

        default:
            return state;
    }
};
