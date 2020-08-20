import { IMAGES } from '../constants/index';

export const errorReducer = (state = null, action) => {
    switch (action.type) {
        case IMAGES.LOAD:
            return state;
        case IMAGES.LOAD_FAIL:
            return action.error;
        case IMAGES.LOAD_SUCCESS:
            return null;
        default:
            return state;
    }
};
