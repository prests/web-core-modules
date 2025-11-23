import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: {
    index: './src/index.ts',
    'styles.css': './src/index.css.ts',
  },
  unbundle: true,
  tsconfig: './tsconfig.esm.json',
  dts: {
    sourcemap: true,
  },
});
