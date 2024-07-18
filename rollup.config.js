import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

const devMode = (process.env.NODE_ENV !== 'production');

export default [
    {
        input: './src/index.js',
        output: [{
            file: 'dist/index.js',
            format: 'cjs',
            sourcemap: devMode ? "inline" : false,
        }, {
            file: 'dist/index.es.js',
            format: 'es',
            exports: 'named',
            sourcemap: devMode ? "inline" : false,
        }],
        plugins: [
            postcss({
                plugins: [],
                minimize: true,
            }),
            babel({
                "exclude": "node_modules/**",
                presets: ['@babel/preset-react'],
                babelHelpers: 'bundled'
            }),
            commonjs(),
            external(),
            resolve(),
            terser({
                ecma: 2020,
                mangle: { toplevel: true },
                compress: {
                    module: true,
                    toplevel: true,
                    unsafe_arrows: true,
                    drop_console: !devMode,
                    drop_debugger: !devMode
                },
                output: {
                    quote_style: 1
                }
            }),
        ]
    }
]
