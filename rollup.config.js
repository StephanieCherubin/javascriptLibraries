import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

export default [
  {
    input: 'src/index.js',
    plugins: [
      typescript({
        typescript: require('typescript'),
      }),
      terser()],
    output: {
        file: 'umd/stringLibraries.js',
        format: 'umd',
        name: 'stringLibraries',
        esModule: false
    }
  },
  {
    input: 'src/index.js',
    output: {
      file: 'esm/index.js',
      format: 'esm'
    }
  }
];