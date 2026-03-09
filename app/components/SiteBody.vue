<template>
    <Body class="antialiased flex h-full text-base text-background bg-background">
        <div class="relative h-full w-full bg-[#f8fafc]">
            <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(#0000001a_1px,#f8fafc_1px)] bg-[size:16px_16px] " />
        </div>
        <slot />
    </Body>
</template>

<script lang="ts" setup>
defineOptions({
    name: 'SiteBody',
})
</script>
