import { ADD_PRODUCT, ADD_PRODUCT_SAVE_DETAIL } from './constant';

export const addProduct = (payload) => {
    return {
        type: ADD_PRODUCT,
        payload
    };
};

export const saveProductDetails = (payload) => {
    return {
        type: ADD_PRODUCT_SAVE_DETAIL,
        payload
    };
};
