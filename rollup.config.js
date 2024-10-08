import autoExternal from 'rollup-plugin-auto-external';

export default {
  input: 'src/index.js',
  plugins: [
    autoExternal()
  ],
  output: [
    {file: 'lib/index.mjs', format: 'esm', sourcemap: true}
  ]
};
