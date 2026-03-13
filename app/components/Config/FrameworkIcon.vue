<template>
    <Icon
        :name="frameworkIcon.icon"
        class="size-7"
        mode="svg"
    />
</template>

<script lang="ts" setup>
import type { ProjectFrameworks } from '#shared/types/types'

defineOptions({
    name: 'ConfigFrameworkIcon',
})

const props = defineProps<{
    framework: ProjectFrameworks
}>()

const frameworkIcon = computed(() => ({
    vue: {
        icon: 'logos:vue',
        color: '',
    },
    nuxt: {
        icon: 'logos:nuxt-icon',
        color: '',
    },
    vitepress: {
        icon: 'simple-icons:vitepress',
        color: '',
    },
    react: {
        icon: 'logos:react',
        color: '',
    },
    nextjs: {
        icon: 'logos:nextjs-icon',
        color: '',
    },
    astro: {
        icon: 'logos:astro-icon',
        color: '',
    },
    nitro: {
        icon: 'unjs:nitro',
        color: '',
    },
    // preact: {
    //     icon: 'logos:preact',
    //     color: '',
    // },
    lit: {
        icon: 'logos:lit-icon',
        color: '',
    },
    svelte: {
        icon: 'logos:svelte-icon',
        color: '',
    },
    solid: {
        icon: 'logos:solidjs-icon',
        color: '',
    },
    // ember: {
    //     icon: 'logos:ember',
    //     color: '',
    // },
    // qwik: {
    //     icon: 'logos:qwik-icon',
    //     color: '',
    // },
    angular: {
        icon: 'logos:angular-icon',
        color: '',
    },
    // marko: {
    //     icon: 'simple-icons:marko',
    //     color: '',
    // },
    electron: {
        icon: 'logos:electron',
        color: '',
    },

    tailwindcss: {
        icon: 'logos:tailwindcss-icon',
        color: '',
    },
    unocss: {
        icon: 'logos:unocss',
        color: '',
    },

    eslint: {
        icon: 'logos:eslint',
        color: '',
    },
    prettier: {
        icon: 'logos:prettier',
        color: '',
    },
    typescript: {
        icon: 'logos:typescript-icon',
        color: '',
    },
    jest: {
        icon: 'logos:jest',
        color: '',
    },
    vitest: {
        icon: 'logos:vitest',
        color: '',
    },
    oxlint: {
        icon: 'vscode-icons:file-type-oxlint',
        color: '',
    },
    oxfmt: {
        icon: 'vscode-icons:file-type-oxc',
        color: '',
    },

    shadcn: {
        icon: 'vscode-icons:file-type-light-shadcn',
        color: '',
    },
    shadcnVue: {
        icon: 'bxl:shadcn-ui',
        color: '',
    },
}[props.framework]))
</script>
