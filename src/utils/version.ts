import { x } from 'tinyexec'

export async function getLintVersion() {
    const linterVersion = await x('oxlint', ['--version'])

    return linterVersion.stdout.trim().split(' ').filter(Boolean).pop() ?? ''
}

export async function getFmtVersion() {
    const formatVersion = await x('oxfmt', ['--version'])

    return formatVersion.stdout.trim().split(' ').filter(Boolean).pop() ?? ''
}
