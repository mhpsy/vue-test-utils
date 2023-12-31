<script setup lang="ts">
import type {TodoItemImpl} from "@/stores/useTodo/entities/TodoItemClass";
import TodoItem from './TodoItem/index.vue'

interface Props {
    list: TodoItemImpl[]
}

const props = withDefaults(defineProps<Props>(), {})

const emit = defineEmits<{
    (event: 'addToDoItem'): void
}>()

const addToDoItem = () => {
    emit('addToDoItem')
}

</script>

<template>
    <div class="container">
        <div class="grid gap-3 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1">
            <TodoItem v-for="item in props.list" :key="item.id" :data="item">
            </TodoItem>
        </div>
        <button @click="addToDoItem">添加新的项目</button>
    </div>
</template>

<style lang="scss" scoped>

</style>