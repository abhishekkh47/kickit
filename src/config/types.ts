export interface ProjectConfig {
  projectName: string;
  language: 'typescript' | 'javascript';
  framework: 'express' | 'koa';
  architecture: 'class' | 'functional';
  database: 'postgres' | 'mongodb' | 'mysql' | 'none';
  orm: 'sequelize' | 'prisma' | 'mongoose' | 'none';
  authentication: 'jwt' | 'none';
}

export const defaultOptions: Partial<ProjectConfig> = {
  language: 'typescript',
  framework: 'express',
  architecture: 'class',
  database: 'postgres',
  orm: 'prisma',
  authentication: 'jwt',
};
