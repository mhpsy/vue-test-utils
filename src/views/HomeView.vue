<script setup lang="ts">
import {useTodoStore} from "@/stores/useTodo";
import {toRef} from "vue";
import TodoList from "@/components/TodoList/index.vue";

const todoStore = useTodoStore();
todoStore.initTodoList()

const list = toRef(todoStore, 'todo_items_r')

const addToDoItem = () => {
    todoStore.addTodoItem(todoStore.getNewAddTodoItem({
        title: 'new todo item'
    }))
}

</script>

<template>
    <main class="h-screen w-screen flex justify-center py-10 px-4">
        <TodoList :list="list" @add-to-do-item="addToDoItem"/>
    </main>
</template>
