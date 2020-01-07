import api from './api';

export default {
    getCategories() {
        return api.get('/categories');
    },
    getCuisines() {
        return api.get('/cuisines');
    },
};
