interface Content {
    children: Array<{ text: string }>;
}

export interface Task {
    documentId: string;
    title: string;
    content: Content[];
}

export interface TaskState {
    task: Task[] | null;
    loading: boolean;
    error: string | null
}

export const initialState: TaskState = {
    task: null,
    loading: false,
    error: null
}