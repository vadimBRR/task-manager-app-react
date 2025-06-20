import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type TodoTypes = {
	id: string
	content: string
	completed: boolean
}

interface TodoState {
	todos: TodoTypes[]
	addTodo: (text: string) => void
}

const useTodoStore = create<TodoState>()(
	persist(
		(set, get) => ({
			todos: [{ id: '1749144331786', content: 'Item1', completed: false }],
			addTodo: (text: string) =>
				set(old => ({
					todos: [
						...old.todos,
						{ id: crypto.randomUUID(), content: text, completed: false },
					],
				})),
		}),
		{ name: 'todo-storage' }
	)
)

export const useTodos = () => useTodoStore(state=> state.todos)
export const useTodo = () => useTodoStore(state => state)
