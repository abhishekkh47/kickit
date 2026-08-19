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
};
