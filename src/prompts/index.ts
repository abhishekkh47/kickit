import inquirer from 'inquirer';
import { ProjectConfig, defaultOptions } from '../config/types';

export async function promptUser(projectNameStr?: string): Promise<ProjectConfig> {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'Project name:',
      default: 'my-backend',
      when: !projectNameStr,
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
      message: 'Select architecture:',
      choices: ['class', 'functional'],
      default: defaultOptions.architecture,
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
      choices: ['prisma', 'sequelize', 'mongoose', 'none'],
      default: defaultOptions.orm,
      when: (answers) => answers.database !== 'none',
    },
    {
      type: 'list',
      name: 'authentication',
      message: 'Select authentication:',
      choices: ['jwt', 'none'],
      default: defaultOptions.authentication,
    }
  ]);

  return {
    projectName: projectNameStr || answers.projectName,
    ...answers,
  } as ProjectConfig;
}
