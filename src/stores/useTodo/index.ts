import {ref} from 'vue'
import type {Ref} from 'vue'
import {defineStore} from 'pinia'
import type {TodoItemRaw, AddUseTodoItem} from '@/type'
import {TodoItemImpl} from "./entities/TodoItemClass";

export const useTodoStore = defineStore('todo', () => {

    const useKey = '__todo_items_list'
    const todo_items_r: Ref<TodoItemImpl[]> = ref([])

    const getNewItem = (item: AddUseTodoItem) => {
        const allId = todo_items_r.value.map(v => v.id)
        let id = 0
        if (allId.length === 0)
            id = 1
        else
            id = Math.max(...allId) + 1
        return new TodoItemImpl({
            id: id,
            ...item
        })
    }

    const addTodoItem = (item: AddUseTodoItem): TodoItemImpl => {
        console.log(11)
        const newItem = getNewItem(item)
        todo_items_r.value.push(newItem)
        return newItem
    }

    //Partial is a built-in type of TypeScript, which can make all properties of a type optional.
    const getNewAddTodoItem = (item?: Partial<AddUseTodoItem>): AddUseTodoItem => {
        return {
            title: '',
            subtitle: '',
            remark: '',
            completed: false,
            date: new Date().toISOString().slice(0, 10),
            ...(item || {})
        }
    }

    const saveTodoList = () => {
        window.localStorage.setItem(useKey, JSON.stringify(todo_items_r.value.map(item => item.toRaw())))
    }

    const initTodoList = (raw?: TodoItemRaw[]) => {
        raw = raw || JSON.parse(window.localStorage.getItem(useKey) || '[]') as TodoItemRaw[]
        todo_items_r.value = raw.map(item => new TodoItemImpl(item))
    }


    return {todo_items_r, initTodoList, addTodoItem, saveTodoList, getNewAddTodoItem}
})
