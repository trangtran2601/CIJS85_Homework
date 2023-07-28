import { memo} from "react"
import { useTodo, useTodoItem, useIsEdit } from "./hooks";

const AddNewSection = () => {
    const [todoItem, setTodoItem] = useTodoItem()
    const [todoList, setTodoList] = useTodo()
    const [isEdit, setIsEdit] = useIsEdit()
    const handleAddTodo = () => {
        setTodoList([
            ...todoList,
            todoItem
        ])
        setTodoItem({id: 0, name: '', isCompleted: false})
    }
    const handleEditTodo = () => {
        setTodoList(todoList.map((item) => {
            if (item.id === todoItem.id) {
                    return todoItem 
            } else {
                return item
            }            
        }))
        setIsEdit(false)
        setTodoItem({id: 0, name: '', isCompleted: false})
    }
    const handleChangeInput = (e) => {
        if (isEdit) {
            return setTodoItem({
                ...todoItem,
                name: e.target.value
            })
        } else {
            return setTodoItem({
                id: todoList.length + 1,
                name: e.target.value,
                isCompleted: false
            })
        }
    }
    return (
        <div className="add-new-section">
            <input 
                className="new-task-input" 
                placeholder="New Task" 
                value={todoItem.name} 
                onChange={handleChangeInput}>
            </input> 
            {!isEdit && <button className="btn add-new-btn" onClick={handleAddTodo}>Add</button>}            
            {isEdit && <button className="btn edit-btn" onClick={handleEditTodo}>Edit</button>}
        </div>
    )
}

export default memo(AddNewSection)