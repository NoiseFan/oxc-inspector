<template>
    <slot />
</template>

<script lang="ts" setup>
import { oxfmt } from '~~/oxc-inspector.meta.json' with { type: 'json' }
import { providerConfigInspector } from '~/components/Config/index'

defineOptions({
    name: 'ConfigInspectorContainer',
})

const loading = ref<boolean>(true)

setTimeout(() => {
    loading.value = false
}, 2000)

const oxFormat = computed<ILinterInspectorPayload['oxfmt'] | null>(() => oxfmt)

providerConfigInspector({
    loading,
    oxFormat,
})
</script>
