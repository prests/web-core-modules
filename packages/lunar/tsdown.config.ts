import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: {
    index: './src/index.ts',
    utilities: './src/styles/utilities.css.ts',
  },
  unbundle: true,
  tsconfig: './tsconfig.esm.json',
  dts: {
    sourcemap: true,
  },
});
