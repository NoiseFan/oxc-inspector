<template>
    <div v-if="errorInfo" class="grid h-full w-full place-content-center whitespace-pre-line p-4">
        <div class="flex flex-col items-center space-y-32">
            <ConfigInspectorBadge
                class="mb-6 text-2xl font-extrabold"
            />
            <div class="flex flex-col items-center gap-4 text-2xl text-red-500 font-bold">
                <span>Failed to load</span>
                <div class="flex items-center gap-2">
                    <span
                        v-for="file in lintConfigFilenames"
                        :key="file"
                        class="rounded bg-red-500 px-2 text-white text-lg"
                    >
                        {{ file }}
                    </span>
                </div>
            </div>

            <div class="text-lg text-red-500 font-mono">
                {{ errorInfo.message }}
            </div>

            <div class="mt-6 opacity-50">
                Note that
                <NuxtLink :to="`https://github.com/${app.github.repo}`" class="hover:underline" target="_blank">
                    config inspector
                </NuxtLink>
                only works with the oxc config
            </div>
        </div>
    </div>
    <div v-else-if="loading" class="flex flex-col w-full h-full justify-center items-center">
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
import { lintConfigFilenames } from '~~/src/constants'
import { useConfigInspector } from '.'

defineOptions({
    name: 'ConfigInspector',
})

const app = useAppConfig()
const { loading, errorInfo } = useConfigInspector() as IConfigInspector
</script>
