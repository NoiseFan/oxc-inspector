import { createWebSocketServer } from '~~/src/ws'

export default lazyEventHandler(() => {
    const ws = createWebSocketServer({
        cwd: process.cwd(),
    })

    return defineEventHandler(async () => {
        return await (await ws).getPayloadData()
    })
})
