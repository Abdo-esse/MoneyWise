
export const renderHome = (req, res) => {
  res.render('home');  
};

export const renderAbout = (req, res) => {
  res.render('about'); 
};

export const renderDashboard = (req, res) => {
  console.log(req);
   res.render('dashboard/index', {
        layout: 'layout/dashboard', 
        title: 'Vue d\'ensemble - Dashboard MoneyWise',
        pageTitle: 'Vue d\'ensemble',
        user: req.session.user, 
        success: req.flash('success'),
        error: req.flash('error')
    });
};
export const renderTransactions = (req, res) => {
  console.log(req);
   res.render('dashboard/transactions', {
        layout: 'layout/dashboard', 
        title: 'Vue d\'ensemble - Dashboard MoneyWise',
        pageTitle: 'Vue d\'ensemble',
        user: req.session.user, 
        success: req.flash('success'),
        error: req.flash('error')
    });
};
export const renderBudgets = (req, res) => {
  console.log(req);
   res.render('dashboard/budgets', {
        layout: 'layout/dashboard', 
        title: 'Vue d\'ensemble - Dashboard MoneyWise',
        pageTitle: 'Vue d\'ensemble',
        user: req.session.user, 
        success: req.flash('success'),
        error: req.flash('error')
    });
};
export const renderObjectives = (req, res) => {
  console.log(req);
   res.render('dashboard/objectives', {
        layout: 'layout/dashboard', 
        title: 'Vue d\'ensemble - Dashboard MoneyWise',
        pageTitle: 'Vue d\'ensemble',
        user: req.session.user, 
        success: req.flash('success'),
        error: req.flash('error')
    });
};
export const renderProfile = (req, res) => {
  console.log(req);
   res.render('dashboard/profile', {
        layout: 'layout/dashboard', 
        title: 'Vue d\'ensemble - Dashboard MoneyWise',
        pageTitle: 'Vue d\'ensemble',
        user: req.session.user, 
        success: req.flash('success'),
        error: req.flash('error')
    });
};
export const renderReports = (req, res) => {
  console.log(req);
   res.render('dashboard/reports', {
        layout: 'layout/dashboard', 
        title: 'Vue d\'ensemble - Dashboard MoneyWise',
        pageTitle: 'Vue d\'ensemble',
        user: req.session.user, 
        success: req.flash('success'),
        error: req.flash('error')
    });
};
export const renderCategories = (req, res) => {
    const categories = [
    { id: 1, name: 'Alimentation', icon: '🍽️', description: 'Courses', active: true, transactionCount: 45, custom: false },
    { id: 2, name: 'Transport', icon: '🚗', description: 'Essence', active: false, transactionCount: 8, custom: true },
  ];
  console.log(req);
   res.render('dashboard/categories', {
        categories,
        total: categories.length,
        active: categories.filter(c => c.active).length,
        custom: categories.filter(c => c.custom).length,
        layout: 'layout/dashboard', 
        title: 'Vue d\'ensemble - Dashboard MoneyWise',
        pageTitle: 'Vue d\'ensemble',
        user: req.session.user, 
        success: req.flash('success'),
        error: req.flash('error')
    });
};
