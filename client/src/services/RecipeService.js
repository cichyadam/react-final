import api from './api';

export default {
    getRecipe(id) {
        return api.get((`/meal/${id}`));
    },
};
