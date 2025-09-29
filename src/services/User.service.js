// src/services/UserService.js
import bcrypt from "bcrypt";

export class UserService {
constructor(userRepository) {
this.userRepository = userRepository;
}

async register({ email, password, full_name }) {

const existingUser = await this.userRepository.findByEmail(email);
if (existingUser) {
throw new Error("Email déjà utilisé");
}

// Hashage mot de passe
const hashedPassword = await bcrypt.hash(password, 10);

// Création utilisateur
return await this.userRepository.create({
  email,
  password: hashedPassword,
  full_name,
});
}

async login({ email, password }) {
const user = await this.userRepository.findByEmail(email);
if (!user) throw new Error("Utilisateur non trouvé");

const isMatch = await bcrypt.compare(password, user.password);
if (!isMatch) throw new Error("Mot de passe incorrect");

return user;
}
}