
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
