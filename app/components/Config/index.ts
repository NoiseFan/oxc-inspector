import { createContext } from 'reka-ui'

export { default as ConfigInspector } from './Inspector.vue'

export const [useConfigInspector, providerConfigInspector]
    = createContext<IConfigInspector>('oxc-inspector')
