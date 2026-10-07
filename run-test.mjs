import { spawn } from 'node:child_process';

// Vitest on Angular 22 runs in Node/jsdom without needing external browser binaries.
// Filter out legacy --browsers argument passed by check-project.sh.
const incomingArgs = process.argv.slice(2);
const filteredArgs = incomingArgs.filter(arg => !arg.startsWith('--browsers'));

const ngArgs = ['ng', 'test', ...filteredArgs];

const child = spawn('npx', ngArgs, {
  stdio: 'inherit',
  shell: false,
  env: { ...process.env, NG_CLI_ANALYTICS: 'false' }
});

child.on('close', (code) => {
  process.exit(code ?? 0);
});
