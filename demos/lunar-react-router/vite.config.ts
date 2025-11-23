import { defineConfig } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { reactRouter } from '@react-router/dev/vite';

export default defineConfig({
  plugins: [reactRouter(), vanillaExtractPlugin()],
});
