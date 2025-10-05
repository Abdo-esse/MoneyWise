'use strict';
import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Category extends Model {
    static associate(models) {
      Category.belongsTo(models.User, { foreignKey: 'user_id' });
      Category.hasMany(models.Transaction, { foreignKey: 'category_id' });
    }
  }

  Category.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      },
      icon: {
        type: DataTypes.STRING,
        allowNull: true
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      custom: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      transaction_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }
    },
    {
      sequelize,
      modelName: 'Category',
      tableName: 'categories',
      timestamps: true,
      underscored: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  );

  return Category;
};
