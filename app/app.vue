<template>
    <SiteBody>
        <ConfigInspectorContainer>
            <ConfigInspector />
        </ConfigInspectorContainer>
    </SiteBody>
</template>

<script setup lang="ts">
useHead({
    htmlAttrs: {
        class: 'h-full',
    },
})
</script>
