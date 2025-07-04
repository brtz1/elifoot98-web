const fs = require('fs');
const path = require('path');

const dirs = [
  'src/models',
  'src/services/league',
  'src/features/standings',
  'src/features/fixtures',
  'src/features/roster',
  'src/features/finances',
  'src/features/simulation',
  'src/styles',
  'public'
];

const files = {
  'package.json': `{
  "name": "elifoot-web",
  "version": "0.1.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "vite": "^7.0.0",
    "typescript": "^5.0.0",
    "@vitejs/plugin-react": "^3.0.0"
  }
}
`,
  'tsconfig.json': `{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "jsx": "react-jsx",
    "strict": true,
    "baseUrl": ".",
    "paths": { "@/*": ["src/*"] }
  }
}
`,
  'vite.config.ts': `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { '@': '/src' } }
});
`,
  'public/index.html': `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/><title>eLiFoot Game</title></head>
<body><div id="root"></div><script type="module" src="/src/main.tsx"></script></body>
</html>
`,
  'src/main.tsx': `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
`,
  'src/App.tsx': `export default function App() {
  return <div className="p-4 grid gap-6">{/* TODO: mount feature components here */}</div>;
}
`,
  'src/styles/index.css': `body { margin: 0; font-family: sans-serif; }`,
  'README.md': `# eLiFoot Web Game

## Setup

\`\`\`bash
npm install
npm run dev
\`\`\`

See project-structure.md for the full tree.
`,
  'project-structure.md': `See the file/folder skeleton outlined in docs above.`
};

// service + model + feature stubs
const empty = '';
[
  'src/services/league/scheduleFixtures.ts',
  'src/services/league/simulateGame.ts',
  'src/services/league/simulateAll.ts',
  'src/services/league/index.ts',
  'src/models/Team.ts',
  'src/models/Player.ts',
  'src/models/Fixture.ts',
  'src/models/StandingsEntry.ts',
  'src/models/RosterEntry.ts',
  'src/models/FinanceRecord.ts',
  'src/features/standings/useStandings.ts',
  'src/features/standings/StandingsTable.tsx',
  'src/features/fixtures/useFixtures.ts',
  'src/features/fixtures/FixturesList.tsx',
  'src/features/roster/useRoster.ts',
  'src/features/roster/RosterView.tsx',
  'src/features/finances/useFinances.ts',
  'src/features/finances/FinanceDashboard.tsx',
  'src/features/simulation/useSimulation.ts',
  'src/features/simulation/SimulationControls.tsx'
].forEach(f => files[f] = empty);

// create dirs
dirs.forEach(d => fs.mkdirSync(path.join(__dirname, d), { recursive: true }));
// write files
for (const [file, content] of Object.entries(files)) {
  const full = path.join(__dirname, file);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content);
}
console.log('Scaffold complete.');