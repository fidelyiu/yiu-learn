import typescript from '@rollup/plugin-typescript'
import nodeResolve from '@rollup/plugin-node-resolve'

const input = ['src/index.ts']
const fileName = 'yiu-learn'

export default [
    {
        input,
        plugins: [
            typescript(),
            nodeResolve({ browser: true }),
            // commonjs(),
            // json(),
            // babel({ babelHelpers: 'bundled' }),
        ],
        // external: ['lodash-es'],
        output: [
            // ↓浏览器
            {
                file: `dist/${fileName}.iife.js`,
                format: 'iife',
                name: 'Yiu',
                esModule: false,
                exports: 'named',
                // globals: {
                //     'lodash-es': '_',
                // },
            },
            // ↓浏览器压缩版
            // {
            //     file: `dist/${fileName}.iife.min.js`,
            //     format: 'iife',
            //     name: 'Yiu',
            //     esModule: false,
            //     exports: 'named',
            //     // globals: {
            //     //     'lodash-es': '_',
            //     // },
            //     sourcemap: true,
            //     // plugins: [terser()],
            // },
        ],
    },
    {
        input,
        plugins: [
            // json(),
            // commonjs(),
            typescript(),
        ],
        external: ['axios', 'lodash-es', 'qs'],
        output: [
            // 打包器
            {
                file: `dist/${fileName}.esm.js`,
                format: 'esm',
                exports: 'named',
            },
            // 打包器压缩版
            // {
            //     file: `dist/${fileName}.esm.min.js`,
            //     format: 'esm',
            //     exports: 'named',
            //     sourcemap: true,
            //     // plugins: [terser()],
            // },
            // Node
            {
                file: `dist/${fileName}.cjs.js`,
                format: 'cjs',
                exports: 'named',
            },
            // Node压缩版
            // {
            //     file: `dist/${fileName}.cjs.min.js`,
            //     format: 'cjs',
            //     exports: 'named',
            //     sourcemap: true,
            //     // plugins: [terser()],
            // },
        ],
    },
]
