# kickit

An enterprise-grade, highly customizable CLI scaffolding tool to kick-start your production Node.js applications. 

Say goodbye to manual boilerplate setup. `kickit` generates a fully configured, secure, and structured backend project tailored to your exact architectural preferences, complete with ORM integration, environment validation, authentication, and structured logging.

## 🚀 Quick Start

You can generate a new project instantly using `npx` (no installation required):

```bash
npx create-kickit [project-name]
```

Or install it globally to use the command anywhere:

```bash
npm install -g kickit
create-kickit [project-name]
```

## ✨ Features

- **Language Options**: TypeScript (Default) or JavaScript
- **Web Frameworks**: Express or Koa
- **Architecture Paradigms**: 
  - **Class-Based**: Object-oriented services, controllers, and repositories.
  - **Functional**: Pure functions and module exports.
- **Project Structures**:
  - **Enterprise**: Modular routing, centralized Zod environment validation, Winston structured logging, and unified response wrappers (`META_CODE`).
  - **Simple**: A lightweight, flat MVC structure for quick prototyping.
- **Databases**: PostgreSQL, MongoDB, MySQL, or None
- **ORM / ODM integrations**: Prisma, Sequelize, Mongoose
- **Authentication**: Pre-configured JWT flow (Registration, Login, Auth Middleware) with bcrypt password hashing.

## 🛠️ Generated Stack Includes

When generating an `enterprise` project, `kickit` automatically configures:
- **Security**: `cors` and JSON body parsers pre-mounted.
- **Environment Safety**: `zod` schema validation to ensure your app never boots with missing `.env` variables.
- **Logging**: `winston` logger configured to output beautiful logs in development and structured JSON in production.
- **Standardized Responses**: An extendable `BaseController` that ensures every API endpoint returns a consistent `{ meta, data }` format.
- **Global Error Handling**: Centralized error middleware catching and formatting custom `ApiError` instances.

## 📖 Usage

1. Run the CLI:
   ```bash
   npx create-kickit my-awesome-api
   ```
2. Answer the interactive prompts to configure your stack.
3. Change into your new directory:
   ```bash
   cd my-awesome-api
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Set up your `.env` file (a template will be provided).
6. Start the development server:
   ```bash
   npm run dev
   ```

## 📄 License

ISC
