import { ProjectConfig } from '../config/types';

export function getDependencies(config: ProjectConfig) {
  const dependencies: Record<string, string> = {
    'dotenv': '^16.3.1',
    'cors': '^2.8.5'
  };

  const devDependencies: Record<string, string> = {};

  if (config.language === 'typescript') {
    devDependencies['typescript'] = '^5.2.2';
    devDependencies['ts-node'] = '^10.9.1';
    devDependencies['@types/node'] = '^20.5.9';
    devDependencies['@types/cors'] = '^2.8.13';
  }

  if (config.framework === 'express') {
    dependencies['express'] = '^4.18.2';
    if (config.language === 'typescript') {
      devDependencies['@types/express'] = '^4.17.17';
    }
  } else if (config.framework === 'koa') {
    dependencies['koa'] = '^2.14.2';
    dependencies['koa-router'] = '^12.0.0';
    dependencies['koa-bodyparser'] = '^4.4.1';
    if (config.language === 'typescript') {
      devDependencies['@types/koa'] = '^2.13.8';
      devDependencies['@types/koa-router'] = '^3.4.4';
      devDependencies['@types/koa-bodyparser'] = '^4.3.10';
    }
  }

  if (config.database === 'postgres') {
    dependencies['pg'] = '^8.11.3';
    if (config.language === 'typescript') {
      devDependencies['@types/pg'] = '^8.10.2';
    }
  }

  if (config.orm === 'prisma') {
    dependencies['@prisma/client'] = '^5.2.0';
    devDependencies['prisma'] = '^5.2.0';
  }

  if (config.authentication === 'jwt') {
    dependencies['jsonwebtoken'] = '^9.0.2';
    if (config.language === 'typescript') {
      devDependencies['@types/jsonwebtoken'] = '^9.0.2';
    }
  }

  return { dependencies, devDependencies };
}
