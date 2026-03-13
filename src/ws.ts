import type { ILinterInspectorPayload } from '#shared/types/inspector'
import type { IResolveConfig } from '#shared/types/types'
import type { WebSocket } from 'ws'
import { getPort } from 'get-port-please'
import { WebSocketServer } from 'ws'
import { resolveConfigPath } from '~~/src/config'
import { readConfig } from '~~/src/configs'
import { lintConfigFilenames, MARK_CHECK } from '~~/src/constants'
import { ConfigInspectorError } from '~~/src/error'

const readErrorWarning = `Failed to load \`${lintConfigFilenames.join('`, `')}\`.`

export async function createWebSocketServer(options: IResolveConfig) {
    let payload: ILinterInspectorPayload | undefined
    const port = await getPort({ port: 7811, random: true })
    const wss = new WebSocketServer({
        port,
    })

    const wsClients = new Set<WebSocket>()

    wss.on('connection', (ws) => {
        wsClients.add(ws)
        console.log(MARK_CHECK, 'Websocket client connected')
        ws.on('close', () => wsClients.delete(ws))
    })

    let resolvedConfigPath: Awaited<ReturnType<typeof resolveConfigPath>>

    try {
        resolvedConfigPath = await resolveConfigPath(options)
    }
    catch (error) {
        if (error instanceof ConfigInspectorError) {
            error.prettyPrint()
        }
        else {
            throw error
        }
    }

    const getPayloadData = async () => {
        try {
            if (!payload) {
                payload = await readConfig(resolvedConfigPath)
            }
            return payload
        }
        catch {
            return {
                message: readErrorWarning,
                error: true,
            }
        }
    }

    return {
        port,
        wss,
        getPayloadData,
    }
}
