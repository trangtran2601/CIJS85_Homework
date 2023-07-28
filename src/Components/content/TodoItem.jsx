
import {useTodo, useTodoItem, useIsEdit} from "./hooks";

const TodoItem = ({item, props}) => {


    const {id, name, isCompleted} = item
    const [todoList, setTodoList] = useTodo()
    const [todoItem, setTodoItem] = useTodoItem()
    const [isEdit, setIsEdit] = useIsEdit()
    const handleCheckbox = (id)=> {
          setTodoList(todoList.map((todoItem)=> {               
                    if (todoItem.id === id) {
                        console.log(todoItem)
                            return {
                                ...todoItem,
                                isCompleted: !isCompleted
                            }
                    }    else {
                        return todoItem
                    }            
          }))
        }
    const handleDelete = (id) => {
        setTodoList(todoList.filter((todoItem) => {
            return todoItem.id !== id
        }))
        setTodoItem({id: 0, name: '', isCompleted: false})
        setIsEdit(false)
    }
    const handleEdit  = (id) => {
        setTodoItem(todoList.find((todoItem)=> todoItem.id === id))
        setIsEdit(true)
    }
    return (            
                <li className="todo-item">
                    <span className="todo-item-name">{name}</span>
                    <div className="todo-controls-box">
                        <span className="todo-control-btn">
                            <input 
                            type="checkbox"
                            checked ={isCompleted}
                            onChange={() => handleCheckbox(id)}
                            ></input>                      
                        </span>                       
                        <span className="todo-control-btn" onClick={() => handleDelete(id)}>
                            <i className="fa-solid fa-trash"></i>                        
                        </span>
                        <span className="todo-control-btn" onClick={() => handleEdit(id)}>
                            <i className="fa-regular fa-pen-to-square"></i>
                        </span>
                        <span className="todo-control-btn">
                            <i className="fa-solid fa-palette"></i>
                        </span>
                        
                    </div>
                    
                </li>
            )
}

export default TodoItem