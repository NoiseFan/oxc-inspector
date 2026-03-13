<template>
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Package name</TableHead>
                <TableHead class="text-right">
                    Version
                </TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow v-for="(version, deps) in dependencies" :key="deps">
                <TableCell class="font-medium">
                    {{ deps }}
                </TableCell>
                <TableCell class="text-right">
                    {{ version }}
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>
</template>

<script setup lang="ts">
defineOptions({
    name: 'ConfigDependenciesList',
})
defineProps<{
    dependencies: Record<string, string>
}>()
</script>

<style scoped>

</style>
