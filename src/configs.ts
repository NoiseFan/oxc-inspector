import type { IResolveConfig } from './types'
import c from 'ansis'
import { bundleRequire } from 'bundle-require'
import { resolveConfig, resolveConfigPath } from './config'
import { MARK_INFO } from './constants'
import { ConfigInspectorError } from './error'
import { resolveEslintRulesConfig } from './rules'

async function readConfig(options: IResolveConfig) {
    let resolvedConfigPath: Awaited<ReturnType<typeof resolveConfigPath>>

    try {
        resolvedConfigPath = await resolveConfigPath(options)
    }
    catch (error) {
        if (error instanceof ConfigInspectorError) {
            error.prettyPrint()
            process.exit(1)
        }
        throw error
    }

    const {
        basePath,
        lintConfigPath,
        formatConfigPath,
        eslintConfigPath,
        linterVersion,
        formatVersion,
    } = resolvedConfigPath
    console.log(resolvedConfigPath)

    console.log(MARK_INFO, `Reading Oxc Linter config from`, c.blue(lintConfigPath))

    if (formatConfigPath) {
        console.log(MARK_INFO, `Reading Oxc Format config from`, c.blue(formatConfigPath))
    }

    if (lintConfigPath.endsWith('.ts')) {
        const { mod } = await bundleRequire({
            cwd: basePath,
            filepath: lintConfigPath,
            tsconfig: false,
        })
        console.log(await (mod.default ?? mod))
    }

    await resolveEslintRulesConfig(resolvedConfigPath)

    const payload = {
        oxlint: {
            // current .oxlint.json
            config: {},
            // default oxlint rule option
            rules: {},
        },
        oxfmt: {
            // current .oxfmt.json
            config: {},
            // default oxfmt rule option
            rules: {},
        },
        eslint: {
            // current eslint.config.{j,t,mj,mt}s
            config: {},
            // default eslint config
            rules: [],
            // match eslint config files
            files: [],
        },
        meta: {
            version: {
                oxlint: linterVersion,
                oxfmt: formatVersion,
            },
            lastUpdate: Date.now(),
            basePath,
            lintConfigPath,
            formatConfigPath,
            eslintConfigPath,
        },
    }

    console.log(payload)
}

readConfig(resolveConfig()).then(() => {})
