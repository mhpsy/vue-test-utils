import type {Dayjs} from 'dayjs'

type TodoItemRaw = {
    id: number
    title: string
    subtitle: string
    remark: string
    completed: boolean
    date: string
}

type TodoItem = Omit<TodoItemRaw, 'date'> & {
    date: Dayjs
}

type SortType = 'id' | 'title' | 'subtitle' | 'remark' | 'completed' | 'date'

type AddUseTodoItem = Omit<TodoItemRaw, 'id'>;


export type {TodoItem, TodoItemRaw, SortType, AddUseTodoItem}
