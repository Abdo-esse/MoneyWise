export class CategoryRepository {
  constructor(CategoryModel) {
    this.model = CategoryModel;
  }

  async create(data) {
    return await this.model.create(data);
  }

  async bulkCreate(categories) {
    return await this.model.bulkCreate(categories);
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async findAllByUser(userId) {
    return await this.model.findAll({ where: { user_id: userId } });
  }

  async update(id, data) {
    const category = await this.findById(id);
    if (!category) throw new Error("Catégorie non trouvée");
    return await category.update(data);
  }

  async delete(id) {
    const category = await this.findById(id);
    if (!category) throw new Error("Catégorie non trouvée");
    return await category.destroy();
  }
}
