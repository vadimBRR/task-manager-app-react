import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type TodoTypes = {
	id: string
	content: string
	completed: boolean
}

interface TodoState {
	todos: TodoTypes[]
	addTodo: (text: string) => void
	toggleCompleted: (id: string) => void
	removeTodo: (id: string) => void
}

const useTodoStore = create<TodoState>()(
	persist(
		(set, get) => ({
			todos: [{ id: '1749144331786', content: 'Item1', completed: false }],
			addTodo: (text: string) =>
				set(old => ({
					todos: [
						{ id: crypto.randomUUID(), content: text, completed: false },
						...old.todos,
					],
				})),
			toggleCompleted: (id: string) =>
				set(old => ({
					todos: old.todos.map(todo =>
						todo.id === id ? { ...todo, completed: !todo.completed } : todo
					),
				})),

			removeTodo: (id: string) =>
				set(old => ({
					todos: old.todos.filter(todo => todo.id !== id),
				})),
		}),
		{ name: 'todo-storage' }
	)
)

export const useTodos = () => useTodoStore(state => state.todos)
export const useTodo = () => useTodoStore(state => state)
