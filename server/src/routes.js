const SearchController = require('./controllers/SearchController');
const MealController = require('./controllers/MealController');
const ListController = require('./controllers/ListController');
const AuthController = require('./controllers/AuthController');
const RecipeController = require('./controllers/RecipeController');
const RecipeControllerPolicy = require('./policies/RecipeControllerPolicy');

module.exports = (app) => {
    app.post('/register',
        AuthController.register,
    );
    app.post('/login',
        AuthController.login,
    );
    app.get('/ingredient/:ingredient',
        SearchController.fetchByIngredient,
    );
    app.get('/category/:category',
        SearchController.fetchByCategory,
    );
    app.get('/cuisine/:cuisine',
        SearchController.fetchByCuisine,
    );
    app.get('/meal/:id',
        MealController.getItem,
    );
    app.get('/categories',
        ListController.listCategories,
    );
    app.get('/cuisines',
        ListController.listCuisines,
    );
    app.post('/save-recipe',
        RecipeControllerPolicy.authorize,
        RecipeController.saveRecipe,
    );
    app.get('/get-favourites',
        RecipeControllerPolicy.authorize,
        RecipeController.getSavedRecipes,
    );
    app.post('/remove-recipe',
        RecipeControllerPolicy.authorize,
        RecipeController.removeSavedRecipe,
    );
    // TODO - Add 'save' route to save recipe with policy
};
