<template>
    <slot />
</template>

<script lang="ts" setup>
const router = useRouter()
router.replace('/configs')
</script>
