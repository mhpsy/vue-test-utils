<script setup lang="ts">
import {useIdIncrease} from "@/utils/useIdIncrease";

const id = useIdIncrease('todo-check-box');


</script>

<template>
    <div class="todo-check-box">
        <input type="checkbox" name="use" :id="id">
        <label :for="id"></label>
    </div>
</template>

<style lang="scss" scoped>
.todo-check-box {
    --todo-check-box-size: 20px;
    --todo-check-box-color: #ccc;
    --todo-check-box-color-checked: #fff;
    --todo-check-box-color-bg: #bdbdbd;
    --todo-check-box-color-checked-bg: #aba7ff;
    --todo-check-width: 50px;
    --todo-check-height: calc(var(--todo-check-box-size, 0px) + 2px);

    label {
        display: block;
        width: var(--todo-check-width);
        //这里加2是为了撑开
        //height: calc(var(--todo-check-height) + 2px);
        height: var(--todo-check-height);
        background: var(--todo-check-box-color-bg);
        border-radius: 16px;
        border: 1px solid #ccc;
    }

    label::after {
        content: '';
        display: block;
        width: var(--todo-check-box-size);
        height: var(--todo-check-box-size);
        background-color: var(--todo-check-box-color);
        border-radius: 50%;
        border: 1px solid var(--todo-check-box-color);
        transition: all 0.3s;
        transform: translateX(1px);
    }

    input[type="checkbox"]:checked + label::after {
        transform: translateX(calc(var(--todo-check-width, 0px) - var(--todo-check-box-size, 0px) - 2px));
        background-color: var(--todo-check-box-color-checked);
        border: 1px solid var(--todo-check-box-color-checked);
    }

    input[type="checkbox"]:checked + label {
        background-color: var(--todo-check-box-color-checked-bg);
    }

    input[type="checkbox"] {
        display: none;
    }


}
</style>