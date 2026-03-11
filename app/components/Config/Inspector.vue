<template>
    <div v-if="loading" class="flex flex-col w-full h-full justify-center items-center">
        <div
            class="flex gap-2 items-center flex-auto animate-pulse text-2xl"
        >
            <Icon mode="svg" name="svg-spinners:90-ring-with-bg" />
            Loading config...
        </div>
        <ConfigInspectorBadge
            :show-version="false"
            class="mt-6 text-xl font-extralight"
        />
    </div>
    <NuxtLayout v-else>
        <NuxtPage />
    </NuxtLayout>
</template>

<script lang="ts" setup>
import { useConfigInspector } from '.'

defineOptions({
    name: 'ConfigInspector',
})

const { loading } = useConfigInspector() as IConfigInspector
</script>
