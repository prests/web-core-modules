export default {
  '**/*.{css,html,js,jsx,json,less,md,scss,ts,tsx,yaml}': ['prettier --write'],
  'src/**/*.{js,jsx,ts,tsx}': ['eslint --max-warnings=0 --fix'],
  '**/*.{js,ts}?(x)': () => ['react-router typegen', 'tsc -p tsconfig.json --noEmit'],
};
