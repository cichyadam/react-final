module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define('Recipe', {
        // TODO - decide if it should be name or id
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
