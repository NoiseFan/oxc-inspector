<template>
    <div class="absolute right-[calc(100%+10px)] top-1.5 font-mono opacity-35 max-lg:hidden">
        #{{ index }}
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'ConfigStateLine',
})

defineProps<{
    index: number
}>()
</script>
