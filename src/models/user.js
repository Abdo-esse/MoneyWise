'use strict';
// src/models/user.js
import { Model, DataTypes } from 'sequelize';
import { categoryService } from '../container.js';

export default (sequelize) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Transaction, { foreignKey: 'user_id' });
      User.hasMany(models.Category, { foreignKey: 'user_id' });
      User.hasMany(models.Budget, { foreignKey: 'user_id' });
      User.hasMany(models.SavingsGoal, { foreignKey: 'user_id' });
      User.hasOne(models.Preference, { foreignKey: 'user_id' });
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { isEmail: true }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      full_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      photo_url: {
        type: DataTypes.STRING,
        allowNull: true
      },
      currency: {
        type: DataTypes.STRING(10),
        allowNull: false,
        defaultValue: 'MAD'
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
      modelName: 'User',
      tableName: 'users',
      timestamps: true,
      underscored: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  );

    User.afterCreate(async (user) => {
    await categoryService.createDefaultCategories(user.id);
  });

  return User;
};
