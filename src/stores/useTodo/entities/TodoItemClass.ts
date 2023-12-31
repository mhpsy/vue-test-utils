import type {Dayjs} from 'dayjs';
import dayjs from "dayjs";
import type {TodoItem, TodoItemRaw} from "@/type";

class TodoItemImpl implements TodoItem {
    id: number;
    title: string;
    subtitle: string;
    remark: string;
    completed: boolean;
    date: Dayjs;

    constructor(raw: TodoItemRaw) {
        this.id = raw.id;
        this.title = raw.title;
        this.subtitle = raw.subtitle;
        this.remark = raw.remark;
        this.completed = raw.completed;
        this.date = dayjs(raw.date); // 假设这里将字符串转换为Dayjs对象
    }

    setTitle(title: string): void {
        this.title = title;
    }

    setSubtitle(subtitle: string): void {
        this.subtitle = subtitle;
    }

    setRemark(remark: string): void {
        this.remark = remark;
    }

    toggleOrChangeCompleted(v?: boolean): void {
        if (v !== undefined) {
            this.completed = v;
        } else {
            this.completed = !this.completed;
        }
    }

    setDate(date: Dayjs): void {
        this.date = date;
    }

    toRaw(): TodoItemRaw {
        return {
            id: this.id,
            title: this.title,
            subtitle: this.subtitle,
            remark: this.remark,
            completed: this.completed,
            date: this.date.format(),
        }
    }
}

export {
    TodoItemImpl,
}
