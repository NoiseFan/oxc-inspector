import c from 'ansis'

export const lintConfigFilenames = [
    '.oxlintrc.json',
    '.oxlintrc.jsonc',
    'oxlint.config.ts',
]

export const formatConfigFilenames = [
    '.oxfmtrc.json',
]

export const MARK_CHECK = c.green('✔')
export const MARK_INFO = c.blue('ℹ')
export const MARK_ERROR = c.red('✖')
