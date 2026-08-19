import { ProjectConfig } from '../config/types';

export function getDependencies(config: ProjectConfig) {
  const dependencies: Record<string, string> = {
    'dotenv': '^16.3.1',
    'cors': '^2.8.5'
  };

  const devDependencies: Record<string, string> = {
    'eslint': '^8.53.0'
  };

  if (config.structure === 'enterprise') {
    dependencies['zod'] = '^3.22.4';
    dependencies['winston'] = '^3.10.0';
  }

  if (config.language === 'typescript') {
    devDependencies['typescript'] = '^5.2.2';
    devDependencies['ts-node'] = '^10.9.1';
    devDependencies['@types/node'] = '^20.5.9';
    devDependencies['@types/cors'] = '^2.8.13';
    devDependencies['@typescript-eslint/parser'] = '^6.11.0';
    devDependencies['@typescript-eslint/eslint-plugin'] = '^6.11.0';
  }

  if (config.framework === 'express') {
    dependencies['express'] = '^4.18.2';
    if (config.structure === 'enterprise') {
      dependencies['express-rate-limit'] = '^7.1.0';
      dependencies['helmet'] = '^7.0.0';
    }
    if (config.language === 'typescript') {
      devDependencies['@types/express'] = '^4.17.17';
    }
  } else if (config.framework === 'koa') {
    dependencies['koa'] = '^2.14.2';
    dependencies['koa-router'] = '^12.0.0';
    dependencies['koa-bodyparser'] = '^4.4.1';
    dependencies['@koa/cors'] = '^4.0.0';
    if (config.structure === 'enterprise') {
      dependencies['koa-ratelimit'] = '^5.0.1';
      dependencies['koa-helmet'] = '^7.0.2';
    }
    if (config.language === 'typescript') {
      devDependencies['@types/koa'] = '^2.13.8';
      devDependencies['@types/koa-router'] = '^3.4.4';
      devDependencies['@types/koa-bodyparser'] = '^4.3.10';
      devDependencies['@types/koa__cors'] = '^4.0.0';
      if (config.structure === 'enterprise') {
        devDependencies['@types/koa-ratelimit'] = '^5.0.0';
      }
    }
  }

  if (config.database === 'postgres') {
    dependencies['pg'] = '^8.11.3';
    dependencies['pg-hstore'] = '^2.3.4';
    if (config.language === 'typescript') {
      devDependencies['@types/pg'] = '^8.10.2';
    }
  } else if (config.database === 'mysql') {
    dependencies['mysql2'] = '^3.6.0';
  }

  if (config.orm === 'prisma') {
    dependencies['@prisma/client'] = '^5.2.0';
    devDependencies['prisma'] = '^5.2.0';
  } else if (config.orm === 'mongoose') {
    dependencies['mongoose'] = '^7.5.0';
    if (config.language === 'typescript') {
      devDependencies['@types/mongoose'] = '^5.11.97';
    }
  } else if (config.orm === 'sequelize') {
    dependencies['sequelize'] = '^6.32.1';
    devDependencies['sequelize-cli'] = '^6.6.1';
  }

  if (config.authentication === 'jwt') {
    dependencies['jsonwebtoken'] = '^9.0.2';
    dependencies['bcryptjs'] = '^2.4.3';
    if (config.language === 'typescript') {
      devDependencies['@types/jsonwebtoken'] = '^9.0.5';
      devDependencies['@types/bcryptjs'] = '^2.4.6';
    }
  }

  if (config.testingFramework === 'jest') {
    devDependencies['jest'] = '^29.7.0';
    devDependencies['supertest'] = '^6.3.3';
    if (config.language === 'typescript') {
      devDependencies['ts-jest'] = '^29.1.1';
      devDependencies['@types/jest'] = '^29.5.11';
      devDependencies['@types/supertest'] = '^6.0.2';
    }
  } else if (config.testingFramework === 'mocha') {
    devDependencies['mocha'] = '^10.2.0';
    devDependencies['chai'] = '^4.3.10';
    devDependencies['supertest'] = '^6.3.3';
    if (config.language === 'typescript') {
      devDependencies['@types/mocha'] = '^10.0.6';
      devDependencies['@types/chai'] = '^4.3.11';
      devDependencies['@types/supertest'] = '^6.0.2';
      // ts-node is already in devDependencies for typescript
    }
  }

  if (config.redis) {
    dependencies['redis'] = '^4.6.10';
  }

  return { dependencies, devDependencies };
}
