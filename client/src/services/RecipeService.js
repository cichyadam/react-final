import api from './api';

export default {
    getRecipe(id) {
        return api.get(`/meal/${id}`);
    },
    saveRecipe(data, token) {
        return api.post(`/save-recipe?token=${token}`, data);
    },
    removeRecipe(data, token) {
        return api.post(`/remove-recipe?token=${token}`, data);
    },
    getFavourites(token) {
        return api.get(`/get-favourites?token=${token}`);
    },
};
