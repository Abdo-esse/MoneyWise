'use strict';
import { v4 as uuidv4} from 'uuid'
import bcrypt from 'bcrypt'

module.exports = {
  async up(queryInterface) {
    const users = [];

    for (let i = 1; i <= 10; i++) {
      users.push({
        id: uuidv4(),
        name: `user${i}`,
        email: `user${i}@example.com`,
        password: await bcrypt.hash('password123', 10), 
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert('Users', users, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
