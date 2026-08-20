# 🚀 buildmyapp

**An enterprise-grade, highly customizable CLI scaffolding tool to kick-start your production Node.js applications.**

![npm](https://img.shields.io/npm/v/buildmyapp)
![downloads](https://img.shields.io/npm/dt/buildmyapp)
![license](https://img.shields.io/npm/l/buildmyapp)

<br/>

## 🌟 Overview

`buildmyapp` is a CLI that generates fully configured, secure, and structured Node.js project boilerplates. Instead of spending hours wiring up authentication, logging, databases, linting, and environment validation from scratch, run one command and get a production-ready project tailored exactly to your architectural preferences.

No more manual boilerplate setup. Start building features instantly.

---

## ⚡ Quick Start

### Installation

Install globally to use it anywhere:
```bash
npm install -g buildmyapp
```

Or run instantly using `npx` (no installation required):
```bash
npx buildmyapp init
```

### Create a Project

Start the interactive setup by running:
```bash
buildmyapp my-awesome-api
# OR
npx buildmyapp my-awesome-api
```

You'll be prompted to choose:
1. **Language:** TypeScript or JavaScript
2. **Framework:** Express or Koa
3. **Architecture:** Class-Based (OOP) or Functional
4. **Structure:** Enterprise (advanced tooling) or Simple (lightweight MVC)
5. **Database & ORM:** PostgreSQL, MongoDB, MySQL (Prisma, Sequelize, Mongoose)
6. **Authentication:** JWT-based or None
7. **Testing:** Jest or Mocha
8. **Package Manager:** npm, yarn, or pnpm
9. **Redis:** Optional caching setup

### Run Your App

```bash
cd my-awesome-api
npm install
npm run dev
```

---

## 📦 What Gets Generated?

After the CLI finishes, your project includes:

- ✅ A complete, scalable folder structure based on your choices.
- ✅ All necessary runtime and development dependencies installed.
- ✅ Environment variables strictly configured (`.env.example` -> `.env`).
- ✅ Database connections properly established.
- ✅ Authentication routing and middleware (if selected).
- ✅ Code quality tooling (ESLint + Prettier).
- ✅ Pre-commit hooks via **Husky** + **lint-staged**.

---

## 🔥 Features

### 🛡️ Authentication & Security
- Complete JWT-based authentication flow (Registration, Login, Auth Middleware).
- Secure password hashing with `bcrypt`.
- **Helmet** integration for HTTP security headers (Enterprise mode).
- Built-in API Rate Limiting (Enterprise mode).

### 📐 Architecture & Structure
Choose between a lightweight **Simple** MVC layout for prototyping or a full **Enterprise** structure that includes:
- **Environment Safety:** `zod` schema validation guarantees your app never boots with missing or invalid `.env` variables.
- **Standardized Responses:** Extendable base controllers ensuring every API endpoint returns a consistent `{ meta, data }` format.
- **Global Error Handling:** Centralized middleware catching and formatting custom `ApiError` instances cleanly.

### 📝 Logging & Monitoring
- **Winston** structured logging.
- Formatted output for local development.
- JSON output for production log ingestion (Enterprise mode).

### ⚡ Performance & Data
- Relational and NoSQL support via **Prisma**, **Sequelize**, or **Mongoose**.
- Integrated **Redis** caching layer connection setup.
- Flexible support for Express or Koa.

### 🛠️ Developer Experience
- Immediate hot-reloading with `nodemon` or `ts-node`.
- Automated code formatting on commit via **Husky** and **lint-staged**.
- Instant testing setup using **Jest** or **Mocha**.

---

## 💡 Usage Example

```bash
# Generate a new project
npx buildmyapp billing-service

# The CLI will prompt you:
? Select language: typescript
? Select framework: express
? Select architecture paradigm: class
? Select folder structure: enterprise
? Select database: postgres
? Select ORM/ODM: prisma
? Select authentication: jwt
? Select testing framework: jest
? Select package manager: npm
? Configure Redis cache setup? yes

# Output
Successfully created project billing-service!
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page and submit pull requests.

## 📄 License

This project is licensed under the **MIT License**.

---
*Made with ❤️ for developers who value quality, architecture, and speed.*
