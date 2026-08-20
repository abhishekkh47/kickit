export interface ProjectConfig {
  projectName: string;
  language: 'typescript' | 'javascript';
  framework: 'express' | 'koa';
  architecture: 'class' | 'functional';
  structure: 'simple' | 'enterprise';
  database: 'postgres' | 'mongodb' | 'mysql' | 'none';
  orm: 'sequelize' | 'prisma' | 'mongoose' | 'none';
  authentication: 'jwt' | 'none';
  testingFramework: 'jest' | 'mocha' | 'none';
  packageManager: 'npm' | 'yarn' | 'pnpm';
  redis: boolean;
  swagger: boolean;
  docker: boolean;
  projectDescription: string;
  authorName: string;
  port: number;
  databaseUrl: string;
}

export const defaultOptions: Partial<ProjectConfig> = {
  language: 'typescript',
  framework: 'express',
  architecture: 'class',
  structure: 'simple',
  database: 'postgres',
  orm: 'prisma',
  authentication: 'jwt',
  testingFramework: 'jest',
  packageManager: 'npm',
  redis: false,
  swagger: false,
  docker: false,
  projectDescription: 'A BuildMyApp generated project',
  authorName: '',
  port: 3000,
  databaseUrl: '',
};
