<template>
    <div class="flex gap-2 items-start">
        <Icon
            class="my-1 flex-none text-xl"
            mode="svg"
            name="ph:list-dashes-duotone"
        />
        <div class="flex-1">
            <div class="flex flex-col gap-3">
                <span class="font-mono font-medium">Rules</span>
                <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
                    <RuleList
                        v-for="rule in Object.entries(rules)"
                        :key="rule[0]"
                        :rule="rule"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { DummyRuleMap } from 'oxlint'

defineOptions({
    name: 'ConfigRuleItem',
})

defineProps<{
    rules: DummyRuleMap
}>()
</script>
