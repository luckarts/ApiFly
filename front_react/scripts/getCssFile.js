const fs = require('fs');
const path = require('path');
const fg = require('fast-glob');

let isFirstRun = true;

const scssFiles = [];

async function getFiles(dirs) {
  for (const dir of dirs) {
    const files = await fg(path.join(dir, '*.scss'));
    for (const file of files) {
      scssFiles.push(file);
    }
    const subdirectories = await fg(path.join(dir, '*'), { onlyDirectories: true });

    for (const subdirectory of subdirectories) {
      if (!dirs.includes(subdirectory)) {
        await getFiles([subdirectory]);
      }
    }
  }
}

async function build() {
  await getFiles(['src/containers', 'src/components', 'src/contexts', 'src/assets/css']);

  let imports = '';
  imports += `@import "tailwindcss/base";\n`;
  imports += `@import "tailwindcss/components";\n`;
  imports += `@import "tailwindcss/utilities";\n`;
  for (const file of scssFiles) {
    imports += `@import "../${file}";\n`;
  }

  fs.writeFileSync('./src/assets/style/main.scss', imports);

  // execSync('npm run build-scss', { stdio: 'inherit' });
}

build();
