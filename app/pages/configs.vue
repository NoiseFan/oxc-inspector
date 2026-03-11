<template>
    <div class="flex flex-col space-y-6">
        <Collapsible
            v-model:open="isOpen"
            :class="cn(
                'relative flex flex-col border rounded-xl',
                'font-mono cursor-pointer',
            )"
        >
            <div class="absolute right-[calc(100%+10px)] top-1.5 font-mono opacity-35 max-lg:hidden">
                #22
            </div>
            <CollapsibleTrigger
                :class="cn(
                    'flex justify-between items-start w-full',
                    'bg-teal-500/5 p-2',
                    isOpen ? 'rounded-t-xl' : 'rounded-xl',
                )"
            >
                <span class="text-sm">
                    <ColorConfigName name="sssss" />
                </span>
                <div class="flex gap-4 items-center">
                    <ConfigStateFiles />
                    <ConfigStateIgnores />
                    <ConfigStatePlugins />
                    <ConfigStateRules />
                </div>
            </CollapsibleTrigger>

            <CollapsibleContent
                :class="cn(
                    'flex flex-col gap-4 px-4 py-3',
                    'bg-zinc-50/50 rounded-b-xl',
                )"
            >
                <div class="flex gap-2 items-start">
                    <Icon
                        class="my-1 flex-none"
                        mode="svg"
                        name="ph:eye-closed-duotone"
                    />
                    <div class="flex flex-col gap-3">
                        <span class="text-sm font-mono font-medium">Ignore files globally</span>
                        <div class="flex gap-2 items-center flex-wrap">
                            <Badge
                                variant="secondary"
                            >
                                <ColorConfigName name="asdasd.ts" />
                            </badge>
                        </div>
                    </div>
                </div>
            </CollapsibleContent>
        </Collapsible>
    </div>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'

const isOpen = ref(true)
</script>
