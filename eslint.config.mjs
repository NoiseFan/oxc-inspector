import { antfu } from '@antfu/eslint-config'
// @ts-check
import nuxt from './.nuxt/eslint.config.mjs'

export default antfu({
    vue: {
        overrides: {
            'vue/block-order': ['error', {
                order: ['template', 'script', 'style'],
            }],
        },
    },
    stylistic: {
        indent: 4, // 4, or 'tab'
        quotes: 'single', // or 'double'
    },
    yaml: {
        overrides: {
            'yaml/indent': ['error', 2],
        },
    },
    rules: {
        'regexp/no-unused-capturing-group': 'off',
        'node/prefer-global/process': 'off',
    },
}).append(nuxt)
