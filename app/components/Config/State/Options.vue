<template>
    <Tooltip>
        <TooltipTrigger>
            <div
                :class="cn(
                    'flex gap-2 items-center',
                    count ? 'text-green-500' : 'opacity-25',
                )"
            >
                <Icon
                    mode="svg"
                    name="ph:list-dashes-duotone"
                />
                <span class="text-sm min-w-6 font-mono font-medium">
                    {{ count }}
                </span>
            <!-- rules -->
            </div>
        </TooltipTrigger>
        <TooltipContent class="font-mono font-semibold">
            {{ count || '0' }} Rules
        </TooltipContent>
    </Tooltip>
</template>

<script setup lang="ts">
import { cn } from '~/lib/utils'

defineOptions({
    name: 'ConfigStateOptions',
})

defineProps<{
    count: number
}>()
</script>
