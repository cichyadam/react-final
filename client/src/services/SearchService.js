import api from './api';

export default {
    getItemsByIngredient(ingredient) {
        return api.get(`/ingredient/${ingredient}`);
    },
    getItemsByCategory(category) {
        return api.get(`/category/${category}`);
    },
    getItemsByCuisine(cuisine) {
        return api.get(`/cuisine/${cuisine}`);
    },
};
