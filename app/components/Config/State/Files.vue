<template>
    <Tooltip>
        <TooltipTrigger>
            <div
                :class="cn(
                    'flex gap-2 items-center',
                    count ? 'text-orange-500' : 'opacity-25',
                )"
            >
                <Icon
                    mode="svg"
                    name="ph:file-magnifying-glass-duotone"
                />
                <span class="text-sm min-w-6 font-mono font-medium">
                    {{ count }}
                </span>
                <!-- files -->
            </div>
        </TooltipTrigger>
        <TooltipContent class="font-mono font-semibold">
            {{ count || '0' }} Files
        </TooltipContent>
    </Tooltip>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'

defineOptions({
    name: 'ConfigStateFiles',
})

defineProps<{
    count: number | string
}>()
</script>
