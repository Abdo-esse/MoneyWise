// src/controllers/auth/login.controller.js

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

  res.status(200).json({
    message: "Connexion réussie",
    user: { id: user.id, email: user.email },
  });
} catch (error) {
  res.status(401).json({ error: error.message });
}
};
}

