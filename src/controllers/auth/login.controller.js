// src/controllers/auth/login.controller.js
import logger from "../../utils/logger.js";

export class LoginController {
constructor(userService) {
this.userService = userService;
}

renderLogin = (req, res) => {
res.render("auth/login");
};

handleLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await this.userService.login({ email, password });
        if (!user) {
            req.flash('error', 'Identifiants invalides');
            return res.redirect('/auth/login');
        }
        logger.info(`User logged in: ${user.email}`);
        req.session.user = { id: user.id, email: user.email, name: user.name };
        req.flash('success', 'Connexion réussie !');
        res.redirect('/dashboard');
    } catch (error) {
        req.flash('error', error.message);
        res.redirect('/auth/login');
    }
};

}

