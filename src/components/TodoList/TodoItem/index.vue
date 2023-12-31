<script setup lang="ts">
import {ref} from 'vue'
import type {TodoItemImpl} from "@/stores/useTodo/entities/TodoItemClass";

interface Props {
    data: TodoItemImpl
}

const props = defineProps<Props>();

const inputBlur = (key: 'Title' | 'Subtitle' | 'Remark', ev: FocusEvent) => {
    const method = 'set' + key as 'setTitle' | 'setSubtitle' | 'setRemark'
    props.data[method](ev.target!.value)
}

</script>

<template>
    <div class="todo-item">
        <div class="flex justify-between">
            <div class="todo-id">Id:{{ props.data.id }}</div>
            <div class="todo-date">
                Date:
                {{ props.data.date.format('YYYY-MM-DD:HH:MM:DD') }}
            </div>
        </div>
        <div>title</div>
        <input class="todo-input w-full" :value="props.data.title" @blur="e=>inputBlur('Title',e)">
        <div>subtitle</div>
        <input class="todo-input w-full" :value="props.data.subtitle" @blur="e=>inputBlur('Subtitle',e)">
        <div>remark</div>
        <input class="todo-input" :value="props.data.remark" @blur="e=>inputBlur('Remark',e)">

    </div>
</template>

<style lang="scss" scoped>
.todo-item {
    @apply border border-blue-300 border-solid rounded-md p-2 cursor-pointer transition-all text-gray-800;
    &:hover {
        @apply border-blue-500 bg-blue-300 text-white;
    }

    .todo-input {
        @apply border-none outline-none bg-transparent;

        &:focus {
            @apply border-none outline-none bg-transparent text-gray-800;
        }
    }

}

</style>