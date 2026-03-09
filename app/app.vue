<template>
    <SiteBody>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </SiteBody>
</template>

<script setup lang="ts">
useHead({
    htmlAttrs: {
        class: 'h-full',
    },
})
</script>
