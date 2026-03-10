import type { IResolveConfig } from './types'
import c from 'ansis'
import { bundleRequire } from 'bundle-require'
import { resolveConfig, resolveConfigPath } from './config'
import { MARK_INFO } from './constants'

async function readConfig(options: IResolveConfig) {
    const resolvedConfigPath = await resolveConfigPath(options)
    const { basePath, lintConfigPath, formatConfigPath, linterVersion, formatVersion }
        = resolvedConfigPath
    console.log(resolvedConfigPath)

    if (lintConfigPath) {
        console.log(MARK_INFO, `Reading Oxc Linter config from`, c.blue(lintConfigPath))
    }

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

    const payload = {
        meta: {
            version: {
                oxlint: linterVersion,
                oxfmt: formatVersion,
            },
            lastUpdate: Date.now(),
            basePath,
            lintConfigPath,
            formatConfigPath,
        },
    }

    console.log(payload)
}

readConfig(resolveConfig()).then(() => {})
