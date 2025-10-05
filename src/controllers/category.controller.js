export class CategoryController {
  constructor(categoryService) {
    this.categoryService = categoryService;
  }

  getCategories = async (req, res) => {
    try {
      const categories = await this.categoryService.getCategories(req.session.user.id);
      res.render('dashboard/categories',
         { 
            categories,
            total: categories.length,
            active: categories.filter(c => c.active).length,
            custom: categories.filter(c => c.custom).length,
            layout: 'layout/dashboard', 
            title: 'Catégories - Dashboard MoneyWise',
         });
    } catch (error) {
      req.flash('error', error.message);
      res.redirect('/dashboard');
    }
  };

  createCategory = async (req, res) => {
    try {
       const category = await this.categoryService.createCategory(req.session.user.id, req.body);
      req.flash('success', 'Catégorie créée !');
      res.json(category);
    } catch (error) {
      req.flash('error', error.message);
      res.json({ success: false, error: error.message });
    }
  };

  updateCategory = async (req, res) => {
    try {
      await this.categoryService.updateCategory(req.params.id, req.body);
      req.flash('success', 'Catégorie modifiée !');
        res.json({ success: true });
    } catch (error) {
      req.flash('error', error.message);
      res.json({ success: false, error: error.message });
    }
  };

  deleteCategory = async (req, res) => {
    try {
      await this.categoryService.deleteCategory(req.params.id);
      req.flash('success', 'Catégorie supprimée !');
      res.json({ success: true });
    } catch (error) {
      req.flash('error', error.message);
      res.json({ success: false, error: error.message });
    }
  };
}
