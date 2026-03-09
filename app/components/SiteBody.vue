<template>
    <Body class="antialiased flex h-full text-base text-foreground bg-zinc-100">
        <div class="absolute inset-0 z-0">
            <div class="relative h-full w-full bg-[#f8fafc] dark:bg-[#0f172a]">
                <div
                    :class="cn(
                        'absolute bottom-0 left-0 right-0 top-0',
                        'bg-[size:16px_16px]',
                        'bg-[radial-gradient(#0000001a_1px,#f8fafc_1px)]',
                        'dark:bg-[radial-gradient(#ffffff33_1px,#0f172a_1px)]',
                    )"
                />
            </div>
        </div>
        <div class="flex grow flex-col z-10 px-4 lg:px-14 py-8 lg:py-10">
            <slot />
        </div>
    </Body>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'

defineOptions({
    name: 'SiteBody',
})
</script>
