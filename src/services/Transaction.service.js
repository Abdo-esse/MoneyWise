export class TransactionService {
  constructor(transactionRepository, categoryRepository) {
    this.transactionRepository = transactionRepository;
    this.categoryRepository = categoryRepository;
  }

  async createTransaction(data) {
    console.log(data)
    const { category_id, type, amount } = data;

    // Validation logique
    if (!['income', 'expense'].includes(type)) {
      throw new Error('Type de transaction invalide');
    }
    if (amount <= 0) {
      throw new Error('Le montant doit être supérieur à zéro');
    }

    // Vérifier catégorie existante si spécifiée
    if (category_id) {
      const category = await this.categoryRepository.findById(category_id);
      if (!category) throw new Error('Catégorie introuvable');
    }

    return await this.transactionRepository.create(data);
  }

  async getAllTransactions(userId) {
    return await this.transactionRepository.findAllByUser(userId);
  }

  async updateTransaction(id, data) {
    return await this.transactionRepository.update(id, data);
  }

  async deleteTransaction(id) {
    const deleted = await this.transactionRepository.delete(id);
    if (!deleted) throw new Error('Transaction non trouvée');
    return true;
  }
}
