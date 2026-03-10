import c from 'ansis'
import { MARK_ERROR } from './constants'

export class ConfigInspectorError extends Error {
    prettyPrint() {
        console.error(MARK_ERROR, this.message)
    }
}

export class ConfigPathError extends ConfigInspectorError {
    override name = 'ConfigPathError' as const

    constructor(
        public basePath: string,
        public configFilenames: string[],
    ) {
        super('Cannot find OXLint config file')
    }

    override prettyPrint() {
        console.error(MARK_ERROR, this.message, c.dim(`

Looked in ${c.underline(this.basePath)} and parent folders for:

 * ${this.configFilenames.join('\n * ')}`,
        ))
    }
}
