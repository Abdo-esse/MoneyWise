# Makefile pour MoneyWise

# Variables
DOCKER_COMPOSE=docker-compose
NPM=npm

# Lancer tous les containers (DB + app + adminer)
up:
	$(DOCKER_COMPOSE) up -d

#build
build:
	$(DOCKER_COMPOSE) up --build -d

# Arrêter et supprimer tous les containers
down:
	$(DOCKER_COMPOSE) down

# Installer les dépendances Node.js
install:
	$(NPM) install

# Lancer le serveur en dev avec nodemon
dev:
	$(DOCKER_COMPOSE) exec app $(NPM) run dev

# Lancer le serveur en prod
start:
	$(DOCKER_COMPOSE) exec app $(NPM) start

# Exécuter les migrations Sequelize
migrate:
	$(DOCKER_COMPOSE) exec app $(NPM) run migrate

# Exécuter les seeders Sequelize
seed:
	$(DOCKER_COMPOSE) exec app $(NPM) run seed

# Linter le code avec ESLint
lint:
	$(DOCKER_COMPOSE) exec app $(NPM) run lint

# Vérifier que tout fonctionne
status:
	$(DOCKER_COMPOSE) ps
