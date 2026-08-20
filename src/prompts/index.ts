import inquirer from 'inquirer';
import { ProjectConfig, defaultOptions } from '../config/types';

export async function promptUser(projectNameStr?: string): Promise<ProjectConfig> {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'Project name (folder will be created):',
      default: 'tas-boilerplate',
      when: !projectNameStr,
    },
    {
      type: 'input',
      name: 'projectDescription',
      message: 'Project description:',
      default: defaultOptions.projectDescription,
    },
    {
      type: 'input',
      name: 'authorName',
      message: 'Author name:',
      default: defaultOptions.authorName,
    },
    {
      type: 'input',
      name: 'port',
      message: 'Application Port:',
      default: defaultOptions.port,
      filter: Number,
    },
    {
      type: 'list',
      name: 'language',
      message: 'Select language:',
      choices: ['typescript', 'javascript'],
      default: defaultOptions.language,
    },
    {
      type: 'list',
      name: 'framework',
      message: 'Select framework:',
      choices: ['express', 'koa'],
      default: defaultOptions.framework,
    },
    {
      type: 'list',
      name: 'architecture',
      message: 'Select architecture paradigm:',
      choices: ['class', 'functional'],
      default: defaultOptions.architecture,
    },
    {
      type: 'list',
      name: 'structure',
      message: 'Select folder structure:',
      choices: ['simple', 'enterprise'],
      default: defaultOptions.structure,
    },
    {
      type: 'list',
      name: 'database',
      message: 'Select database:',
      choices: ['postgres', 'mongodb', 'mysql', 'none'],
      default: defaultOptions.database,
    },
    {
      type: 'list',
      name: 'orm',
      message: 'Select ORM/ODM:',
      choices: (answers) => {
        if (answers.database === 'mongodb') {
          return ['mongoose', 'prisma', 'none'];
        }
        return ['sequelize', 'prisma', 'none'];
      },
      default: (answers: any) => answers.database === 'mongodb' ? 'mongoose' : 'sequelize',
      when: (answers) => answers.database !== 'none',
    },
    {
      type: 'input',
      name: 'databaseUrl',
      message: 'Database URL (e.g., MongoDB Connection String):',
      default: (answers: any) => {
        if (answers.database === 'mongodb') return 'mongodb://localhost:27017/myapp';
        if (answers.database === 'postgres') return 'postgresql://postgres:postgres@localhost:5432/myapp';
        if (answers.database === 'mysql') return 'mysql://root:root@localhost:3306/myapp';
        return '';
      },
      when: (answers) => answers.database !== 'none',
    },
    {
      type: 'list',
      name: 'authentication',
      message: 'Select authentication:',
      choices: ['jwt', 'none'],
      default: defaultOptions.authentication,
    },
    {
      type: 'list',
      name: 'testingFramework',
      message: 'Select testing framework:',
      choices: ['jest', 'mocha', 'none'],
      default: defaultOptions.testingFramework,
    },
    {
      type: 'list',
      name: 'packageManager',
      message: 'Select package manager:',
      choices: ['npm', 'yarn', 'pnpm'],
      default: defaultOptions.packageManager,
    },
    {
      type: 'confirm',
      name: 'redis',
      message: 'Configure Redis cache setup?',
      default: defaultOptions.redis,
    },
    {
      type: 'confirm',
      name: 'swagger',
      message: 'Configure Swagger API documentation?',
      default: defaultOptions.swagger,
    },
    {
      type: 'confirm',
      name: 'docker',
      message: 'Configure Docker and Docker Compose setup?',
      default: defaultOptions.docker,
    }
  ]);

  return {
    projectName: projectNameStr || answers.projectName,
    ...answers,
  } as ProjectConfig;
}
