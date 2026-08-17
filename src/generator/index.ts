import * as path from 'path';
import * as fs from 'fs-extra';
import ejs from 'ejs';
import { ProjectConfig } from '../config/types';
import chalk from 'chalk';
import { getDependencies } from './dependencies';

export async function generateProject(config: ProjectConfig) {
  const targetDir = path.join(process.cwd(), config.projectName);

  if (fs.existsSync(targetDir)) {
    throw new Error(`Directory ${targetDir} already exists.`);
  }

  // Create project directory
  await fs.ensureDir(targetDir);

  const templatesDir = path.join(__dirname, '../../templates');
  
  // 1. Copy common templates
  await copyTemplateFiles(path.join(templatesDir, 'common'), targetDir, config);
  
  // 2. Language templates
  await copyTemplateFiles(path.join(templatesDir, `language/${config.language}`), targetDir, config);
  
  // 3. Framework templates
  await copyTemplateFiles(path.join(templatesDir, `framework/${config.framework}`), targetDir, config);
  
  // 4. Generate package.json
  await generatePackageJson(targetDir, config);

  console.log(chalk.green(`\nSuccessfully created project ${config.projectName}!`));
  console.log(`\nNext steps:`);
  console.log(`  cd ${config.projectName}`);
  console.log(`  npm install`);
  console.log(`  npm run dev`);
}

async function copyTemplateFiles(source: string, target: string, config: ProjectConfig) {
  if (!fs.existsSync(source)) return;
  
  const files = await fs.readdir(source);
  for (const file of files) {
    const srcPath = path.join(source, file);
    
    // In templates, directories mapping to `src` should merge, not overwrite.
    // EJS templates usually have `.ejs` extension.
    const destFileName = file.endsWith('.ejs') ? file.replace('.ejs', '') : file;
    const destPath = path.join(target, destFileName);
    
    const stat = await fs.stat(srcPath);
    if (stat.isDirectory()) {
      await fs.ensureDir(destPath);
      await copyTemplateFiles(srcPath, destPath, config);
    } else {
      if (file.endsWith('.ejs')) {
        const content = await fs.readFile(srcPath, 'utf8');
        const rendered = ejs.render(content, config);
        await fs.writeFile(destPath, rendered);
      } else {
        await fs.copy(srcPath, destPath, { overwrite: true });
      }
    }
  }
}

async function generatePackageJson(targetDir: string, config: ProjectConfig) {
  const deps = getDependencies(config);
  
  const packageJson = {
    name: config.projectName,
    version: '1.0.0',
    description: 'Backend API generated with kickit-backend',
    main: config.language === 'typescript' ? 'dist/index.js' : 'src/index.js',
    scripts: {
      dev: config.language === 'typescript' ? 'ts-node src/index.ts' : 'nodemon src/index.js',
      build: config.language === 'typescript' ? 'tsc' : 'echo "No build step required"',
      start: 'node dist/index.js'
    },
    dependencies: deps.dependencies,
    devDependencies: deps.devDependencies
  };

  await fs.writeJSON(path.join(targetDir, 'package.json'), packageJson, { spaces: 2 });
}
