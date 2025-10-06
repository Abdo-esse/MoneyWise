import logger from '../utils/logger.js';

export class TransactionController {
  constructor(transactionService, categoryService) {
    this.transactionService = transactionService;
    this.categoryService = categoryService;
  }

  getAll = async (req, res) => {
  try {
    const userId = req.session.user.id;
    const transactions = await this.transactionService.getAllTransactions(userId);
    const categories = await this.categoryService.getCategories(userId);

    const transactionsWithCategoryName = transactions.map(tx => {
      const category = categories.find(cat => cat.id === tx.category_id);
      return {
        ...tx.dataValues,
        category_name: category ? category.name : null
      };
    });

    res.render('dashboard/transactions', {
      transactions: transactionsWithCategoryName,
      categories,
      layout: 'layout/dashboard',
    });
  } catch (err) {
    req.flash('error', err.message);
    res.redirect('/dashboard');
  }
};

  create = async (req, res) => {
    try {
      const userId = req.session.user.id;
      const transaction = await this.transactionService.createTransaction({
        ...req.body,
        user_id: userId,
      });
      let category_name = null;
        if (transaction.category_id) {
            const category = await this.categoryService.getCategoryById(transaction.category_id);
            category_name = category ? category.dataValues.name : null;
        }
        const transactionWithCategory = { ...transaction.dataValues, category_name };

        res.status(201).json(transactionWithCategory);
    } catch (error) {
        logger.error(error);
      res.status(400).json({ message: error.message });
    }
  };

  update = async (req, res) => {
    try {
      const updated = await this.transactionService.updateTransaction(req.params.id, req.body);
      let category_name = null;
        if (updated.category_id) {
            const category = await this.categoryService.getCategoryById(updated.category_id);
            category_name = category ? category.dataValues.name : null;
        }
        const transactionWithCategory = { ...updated.dataValues, category_name };

        res.status(201).json(transactionWithCategory);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  delete = async (req, res) => {
    try {
      await this.transactionService.deleteTransaction(req.params.id);
      res.json({ message: 'Transaction supprimée avec succès' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
}
