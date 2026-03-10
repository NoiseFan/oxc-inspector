import type { IResolveConfig, IResolveConfigPath } from './types'
import process from 'node:process'
import c from 'ansis'
import { bundleRequire } from 'bundle-require'
import { findUp } from 'find-up'
import { dirname, normalize } from 'pathe'
import { formatConfigFilenames, lintConfigFilenames, MARK_INFO } from './constants'
import { getFmtVersion, getLintVersion } from './utils/version'

function resolveConfig(): IResolveConfig {
    return {
        cwd: process.cwd(),
    }
}

async function resolveConfigPath(options: IResolveConfig): Promise<IResolveConfigPath> {
    const { cwd } = options

    const lintConfigPath
        = (await findUp(lintConfigFilenames, {
            cwd,
        })) ?? ''

    const formatConfigPath
        = (await findUp(formatConfigFilenames, {
            cwd,
        })) ?? ''

    const basePath = normalize(dirname(lintConfigPath))

    return {
        basePath,
        lintConfigPath,
        formatConfigPath,
        linterVersion: await getLintVersion(),
        formatVersion: await getFmtVersion(),
    }
}

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
