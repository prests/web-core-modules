export default {
  '**/*.{css,html,js,jsx,json,less,md,scss,ts,tsx,yaml}': ['prettier --config ../../prettier.config.ts --write'],
  'src/**/*.{js,jsx,ts,tsx}': ['eslint --max-warnings=0 --fix'],
  '**/*.{js,ts}?(x)': () => 'tsc -p tsconfig.json --noEmit',
};
