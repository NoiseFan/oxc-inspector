import { defineConfig } from 'tsdown'

export default defineConfig({
    entry: ['src/cli.ts'],
    clean: false,
    deps: {
        onlyBundle: false,
        neverBundle: ['esbuild'],
    },
    format: 'esm',
    shims: true,
})
