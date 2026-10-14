import { mkdir, readFile, copyFile } from 'node:fs/promises';
import { Script } from 'node:vm';
const html = await readFile('index.html', 'utf8');
new Script(await readFile('script.js', 'utf8'), { filename: 'script.js' });
for (const file of ['styles.css', 'script.js']) {
  if (!html.includes(file)) throw new Error(`Missing asset reference: ${file}`);
}
await mkdir('dist', { recursive: true });
for (const file of ['index.html', 'styles.css', 'script.js']) await copyFile(file, `dist/${file}`);
console.log('Build successful: dist/index.html, dist/styles.css, dist/script.js');
