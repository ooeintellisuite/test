import react from '@vitejs/plugin-react';
import { join } from 'node:path';
import { defineConfig } from 'vitest/config';

// standard vitest config file

export default defineConfig({
  publicDir: join(import.meta.dirname, 'public'),
  test: {
    name: 'unit',
    include: ['test/unit/**/*.test.ts', 'test/unit/**/*.test.tsx'], // this is relative to the config file and should point to your unit directory
    globals: true,
    environment: 'jsdom',
    setupFiles: join(import.meta.dirname, 'src', 'setupTests.ts'),
    globalSetup: join(import.meta.dirname, 'src', 'setupTestsGlobal.ts'), // if there is a global setup file
    exclude: ['e2e', 'node_modules'], // redundant when using include, but still a good habit.
    coverage: {
      // optional, enable coverage display after running tests - requires coverage/v8 package
      include: ['src/components'],
      provider: 'v8',
      reporter: ['html', 'text'],
    },
  },
  resolve: {
    alias: {
      '@': join(import.meta.dirname, 'src'),
    },
  },
  plugins: [react()],
});
