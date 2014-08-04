module.exports = function(sequelize, /*exports*/DataTypes) {

    var Group = sequelize.define('Group', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: 'group_name',
            validate: {
                notEmpty: true
            }
        },
        is_common: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }

    }, {
        classMethods: {
            associate: function(models) {
                Group.hasMany(models.Phrase, { as: 'id', foreignKey: 'group_id', constraints: true});
            }
        }
    });

    return Group;
};
