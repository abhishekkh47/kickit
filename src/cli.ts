#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';
import { promptUser } from './prompts';
import { generateProject } from './generator';

const program = new Command();

program
  .version('1.0.0')
  .description('CLI to generate backend boilerplates')
  .argument('[project-name]', 'Name of the project')
  .action(async (projectNameStr) => {
    console.log(chalk.blue('Welcome to node-firestart generator!'));
    
    try {
      const config = await promptUser(projectNameStr);
      console.log(chalk.green('\nProject Configuration:'));
      console.log(config);
      
      await generateProject(config);
      
    } catch (error) {
      console.error(chalk.red('Failed to generate project:'), error);
      process.exit(1);
    }
  });

program.parse(process.argv);
