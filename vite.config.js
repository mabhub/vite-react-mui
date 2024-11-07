import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import fs from 'fs';
import path from 'path';
import os from 'os';

const key = fs.readFileSync(path.join(os.homedir(), 'https', 'key.pem'));
const cert = fs.readFileSync(path.join(os.homedir(), 'https', 'cert.pem'));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: { key, cert },
  },
});
