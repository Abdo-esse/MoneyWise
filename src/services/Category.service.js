export class CategoryService {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async createCategory(userId, data) {
    return await this.categoryRepository.create({
      user_id: userId,
      ...data
    });
  }

  async getCategories(userId) {
    return await this.categoryRepository.findAllByUser(userId);
  }

  async updateCategory(id, data) {
    return await this.categoryRepository.update(id, data);
  }

  async deleteCategory(id) {
    return await this.categoryRepository.delete(id);
  }
  async getCategoryById(id) {
    return await this.categoryRepository.findById(id);
  }

  async createDefaultCategories(userId) {
    const defaultCategories = [
      { user_id: userId, name: 'Alimentation', icon: '🍽️', description: 'Courses et restaurants', active: true, custom: false, transaction_count: 0, color: 'blue', created_at: new Date(), updated_at: new Date() },
      { user_id: userId, name: 'Transport', icon: '🚗', description: 'Essence et transports', active: true, custom: false, transaction_count: 0, color: 'green', created_at: new Date(), updated_at: new Date() },
      { user_id: userId, name: 'Logement', icon: '🏠', description: 'Loyer et charges', active: true, custom: false, transaction_count: 0, color: 'yellow', created_at: new Date(), updated_at: new Date() },
      { user_id: userId, name: 'Santé', icon: '🏥', description: 'Médecin, pharmacie', active: true, custom: false, transaction_count: 0, color: 'red', created_at: new Date(), updated_at: new Date() },
    ];
    return await this.categoryRepository.bulkCreate(defaultCategories);
  }
}
