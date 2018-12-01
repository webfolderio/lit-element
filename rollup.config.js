import resolve from 'rollup-plugin-node-resolve';
import common from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import {terser} from 'rollup-plugin-terser';

var config = {
 src: 'src/index.js',
 format: 'iife',
 es5outMin: 'bundle.es5.min.js',
 es6outMin: 'bundle.es6.min.js'
};

export default [{
    input: config.src,
    output: {
        file: config.es6outMin,
        format: config.format
    },
    plugins: [
        resolve(),
        common(),
        terser(),
    ]
}, {
    input: config.es6outMin,
    output: {
        file: config.es5outMin,
        format: config.format
    },
    plugins: [
        babel(),
        terser()
    ]
}];