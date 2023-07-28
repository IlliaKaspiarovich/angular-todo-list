import { Itodo } from "./models/todo"

const TODOS_KEY = 'todos'

const setTodos = (todos: Itodo[]) => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
}

const getTodos = (): Itodo[] | undefined => {
  const todos = localStorage.getItem(TODOS_KEY)

  if(todos) {
    return JSON.parse(todos)
  }

  return undefined
}

export default { setTodos, getTodos }