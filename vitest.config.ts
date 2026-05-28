import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov', 'clover'],
      reportsDirectory: './coverage/teslo-shop',
      exclude: ['node_modules/', 'dist/', '**/*.spec.ts'],
    },
  },
});
