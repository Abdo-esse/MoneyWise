// src/repositories/UserRepository.js


export class UserRepository {
  constructor(User ) {
    this.model = User;
  }
async create(data) {
return await this.model.create(data);
}

async findByEmail(email) {
return await this.model.findOne({ where: { email } });
}

async findAll() {
return await this.model.findAll();
}
}