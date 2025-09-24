import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: {
    index: './src/index.ts',
  },
  unbundle: true,
  tsconfig: './tsconfig.esm.json',
  dts: {
    sourcemap: true,
  },
});
