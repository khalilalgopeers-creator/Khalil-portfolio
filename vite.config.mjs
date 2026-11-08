import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        projects: path.resolve(__dirname, 'projects.html'),
        skills: path.resolve(__dirname, 'skills.html'),
        funfacts: path.resolve(__dirname, 'fun-facts.html'),
        contact: path.resolve(__dirname, 'contact.html'),
      },
    },
  },
});
