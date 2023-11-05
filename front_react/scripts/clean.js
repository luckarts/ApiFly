const fg = require('fast-glob');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const scssFiles = [];

async function getFiles(dir) {
  const files = await fg(path.join(dir, '*.scss'));

  for (const file of files) {
    scssFiles.push(file);
  }

  const subdirectories = await fg(path.join(dir, '*'), { onlyDirectories: true });

  for (const subdirectory of subdirectories) {
    await getFiles(subdirectory);
  }
}

async function build() {
  await getFiles('app');

  let imports = '';
  for (const file of scssFiles) {
    imports += `@import "${file}";\n`;
  }

  fs.writeFileSync('app/asset/sass/main.scss', imports);

  execSync('sass --watch src/styles/index.scss:src/styles/tailwind.css');
}

build();
