// src/controllers/auth/signUp.controller.js
export class SignUpController {
  constructor(userService) {
    this.userService = userService;
  }

  renderSignup = (req, res) => {
    res.render("auth/signUp");
  };

  handleSignup = async (req, res) => {
    try {
      const { email, password, full_name } = req.body;
      await this.userService.register({
        email,
        password,
        full_name,
      });

      res.render("auth/login", { success: "Compte créé, connectez-vous" });
    } catch (error) {
      res.status(400).render("auth/signUp", { error: error.message });
    }
  };
}