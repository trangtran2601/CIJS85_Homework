import { TodoItemContext ,TodoContext , EditContext, FilterContext} from "./Context";
import { useContext} from "react";

const useTodo = () => {
    const [todoList, setTodoList] = useContext(TodoContext)
    return [todoList, setTodoList]
}
const useTodoItem = () => {
    const [todoItem, setTodoItem] = useContext(TodoItemContext)
    return [todoItem, setTodoItem]
}
const useIsEdit = () => {
    const [isEdit, setIsEdit] = useContext(EditContext)
    return [isEdit, setIsEdit]
}

const useFilter = () => {
  const  [selectedFilter, setSelectedFilter] = useContext(FilterContext)
  return [selectedFilter, setSelectedFilter]
}

export {useTodo, useTodoItem, useIsEdit, useFilter}