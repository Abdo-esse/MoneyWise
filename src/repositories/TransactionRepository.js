export class TransactionRepository {
  constructor(Transaction) {
    this.model = Transaction;
  }

  async create(data) {
    return await this.model.create(data);
  }

  async findAllByUser(userId) {
    return await this.model.findAll({
      where: { user_id: userId },
      order: [['date', 'DESC']],
    });
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async update(id, data) {
    const transaction = await this.findById(id);
    if (!transaction) throw new Error("Transaction non trouvée");
    return await transaction.update(data);
  }

  async delete(id) {
    return await this.model.destroy({ where: { id } });
  }
}
