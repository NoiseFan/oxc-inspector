<template>
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div
            v-for="rule in oxRules"
            :key="rule.name"
        >
            {{ rule.name }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useConfigInspector } from '~/components/Config'

const { oxRules } = useConfigInspector()
</script>
