    
    // Password visibility toggles
    document.getElementById('toggle-password').addEventListener('click', function() {
        const passwordField = document.getElementById('password');
        const eyeIcon = document.getElementById('eye-icon');
        
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            eyeIcon.className = 'fas fa-eye-slash text-gray-400 hover:text-gray-600 dark:hover:text-gray-300';
        } else {
            passwordField.type = 'password';
            eyeIcon.className = 'fas fa-eye text-gray-400 hover:text-gray-600 dark:hover:text-gray-300';
        }
    });

    document.getElementById('toggle-confirm-password').addEventListener('click', function() {
        const passwordField = document.getElementById('confirmPassword');
        const eyeIcon = document.getElementById('confirm-eye-icon');
        
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            eyeIcon.className = 'fas fa-eye-slash text-gray-400 hover:text-gray-600 dark:hover:text-gray-300';
        } else {
            passwordField.type = 'password';
            eyeIcon.className = 'fas fa-eye text-gray-400 hover:text-gray-600 dark:hover:text-gray-300';
        }
    });

    // Password strength checker
    document.getElementById('password').addEventListener('input', function() {
        const password = this.value;
        const strengthBar = document.getElementById('password-strength');
        const strengthText = document.getElementById('password-text');
        
        let strength = 0;
        if (password.length >= 8) strength += 25;
        if (/[a-z]/.test(password)) strength += 25;
        if (/[A-Z]/.test(password)) strength += 25;
        if (/[0-9]/.test(password)) strength += 25;
        
        strengthBar.style.width = strength + '%';
        
        if (strength < 50) {
            strengthBar.className = 'h-full bg-red-500 transition-all duration-300';
            strengthText.textContent = 'Mot de passe faible';
            strengthText.className = 'text-xs text-red-500 mt-1';
        } else if (strength < 75) {
            strengthBar.className = 'h-full bg-yellow-500 transition-all duration-300';
            strengthText.textContent = 'Mot de passe moyen';
            strengthText.className = 'text-xs text-yellow-500 mt-1';
        } else {
            strengthBar.className = 'h-full bg-green-500 transition-all duration-300';
            strengthText.textContent = 'Mot de passe fort';
            strengthText.className = 'text-xs text-green-500 mt-1';
        }
    });

    // Password confirmation checker
    document.getElementById('confirmPassword').addEventListener('input', function() {
        const password = document.getElementById('password').value;
        const confirmPassword = this.value;
        const matchText = document.getElementById('password-match');
        
        if (confirmPassword.length > 0) {
            matchText.classList.remove('hidden');
            if (password === confirmPassword) {
                matchText.textContent = 'Les mots de passe correspondent';
                matchText.className = 'text-xs text-green-500 mt-1';
            } else {
                matchText.textContent = 'Les mots de passe ne correspondent pas';
                matchText.className = 'text-xs text-red-500 mt-1';
            }
        } else {
            matchText.classList.add('hidden');
        }
    });
  // Vérification du full_name avec bordure
    const nameInput = document.getElementById('name');
    const errorText = document.getElementById('name-error');

    nameInput.addEventListener('input', function() {
        const name = this.value.trim();

        if (name.length === 0) {
            errorText.textContent = 'Le nom ne peut pas être vide';
            errorText.className = 'text-xs text-red-500 mt-1';
            errorText.classList.remove('hidden');

            // bordure rouge
            nameInput.classList.remove('border-green-500');
            nameInput.classList.add('border-red-500');
        } else {
            errorText.textContent = 'Nom valide';
            errorText.className = 'text-xs text-green-500 mt-1';
            errorText.classList.remove('hidden');

            // bordure verte
            nameInput.classList.remove('border-red-500');
            nameInput.classList.add('border-green-500');
        }
    });

    // Vérification de l'email avec bordure
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');

emailInput.addEventListener('input', function() {
    const email = this.value.trim();
    // Regex simple pour valider un email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.length === 0) {
        emailError.textContent = "L'email ne peut pas être vide";
        emailError.className = 'text-xs text-red-500 mt-1';
        emailError.classList.remove('hidden');

        // Bordure rouge
        emailInput.classList.remove('border-green-500');
        emailInput.classList.add('border-red-500');
    } else if (!emailRegex.test(email)) {
        emailError.textContent = "L'email n'est pas valide";
        emailError.className = 'text-xs text-red-500 mt-1';
        emailError.classList.remove('hidden');

        // Bordure rouge
        emailInput.classList.remove('border-green-500');
        emailInput.classList.add('border-red-500');
    } else {
        emailError.textContent = "Email valide";
        emailError.className = 'text-xs text-green-500 mt-1';
        emailError.classList.remove('hidden');

        // Bordure verte
        emailInput.classList.remove('border-red-500');
        emailInput.classList.add('border-green-500');
    }
});
    // Form validation
document.querySelector('form').addEventListener('submit', function(e) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const submitBtn = document.getElementById('submit-btn');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation du nom
    if (name.length === 0) {
        e.preventDefault();
        alert('Le nom complet ne peut pas être vide');
        nameInput.focus();
        return;
    }

    // Validation de l'email
    if (email.length === 0) {
        e.preventDefault();
        alert("L'email ne peut pas être vide");
        emailInput.focus();
        return;
    } else if (!emailRegex.test(email)) {
        e.preventDefault();
        alert("L'email n'est pas valide");
        emailInput.focus();
        return;
    }
    if(password.trim().length===0){

         e.preventDefault();
         alert("L'password n'est pas valide");
        emailInput.focus();
        return;
    }
     if(confirmPassword.trim().length===0){

         e.preventDefault();
        alert("L'confirmPassword n'est pas valide");
        emailInput.focus();
        return;
    }

    // Validation des mots de passe
    if (password !== confirmPassword) {
        e.preventDefault();
        alert('Les mots de passe ne correspondent pas');
        document.getElementById('password').focus();
        return;
    }

    // Si tout est valide, changer le texte du bouton et le désactiver
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Création du compte...';
    submitBtn.disabled = true;
});