export function isAuthenticated(req, res, next) {
    if (req.session && req.session.user) {
        return next();
    } else {
        req.flash('error', 'Vous devez être connecté pour accéder à cette page.');
        return res.redirect('/auth/login');
    }
}

export function ensureAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    return next(); 
  }
  res.redirect('/auth/login');
}

export function redirectIfAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    return res.redirect('/dashboard'); 
  }
  next();
}
