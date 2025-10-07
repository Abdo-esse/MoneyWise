
export const renderHome = (req, res) => {
  res.render('home');  
};

export const renderAbout = (req, res) => {
  res.render('about'); 
};

export const renderDashboard = (req, res) => {
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
   res.render('dashboard/budgets', {
        layout: 'layout/dashboard', 
        user: req.session.user, 
        success: req.flash('success'),
        error: req.flash('error')
    });
};
