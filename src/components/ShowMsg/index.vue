<script setup lang="ts">
interface Props {
    msg: string
}

const props = defineProps<Props>()
</script>

<template>
    <div>{{ props.msg }}</div>
</template>