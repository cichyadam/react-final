module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define('Recipe', {
        recipe_id: DataTypes.STRING,
        name: DataTypes.STRING,
    });

    Recipe.associate = (models) => {
        // associations can be defined here
        Recipe.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'user',
            onDelete: 'CASCADE',
        });
    };

    return Recipe;
};
