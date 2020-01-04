const SearchController = require('./controllers/SearchController');
const MealController = require('./controllers/MealController');
const ListController = require('./controllers/ListController');

module.exports = (app) => {
    app.get('/ingredient/:ingredient',SearchController.fetchByIngredient),
    app.get('/category/:category',SearchController.fetchByCategory),
    app.get('/cuisine/:cuisine',SearchController.fetchByCuisine),
    app.get('/meal/:id',MealController.getItem),
    app.get('/categories',ListController.listCategories),
    app.get('/cuisines',ListController.listCuisines)
}