
import {useTodo, useTodoItem, useIsEdit} from "./hooks";
import { useState } from "react";
const TodoItem = ({item, props}) => {


    const {id, name, isCompleted} = item
    const [todoList, setTodoList] = useTodo()
    const [todoItem, setTodoItem] = useTodoItem()
    const [isEdit, setIsEdit] = useIsEdit()
    const [colorMode, setColorMode] = useState(false)
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
    const handleOpenColor = () => {
        setColorMode(!colorMode)
    }
    return (            
                <li className={`todo-item ${isCompleted ? 'completed' : 'uncompleted'}`}>
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
                        <span className="todo-control-btn" onClick={() => handleOpenColor()}>
                            <i className="fa-solid fa-palette"></i>
                        </span>
                        
                    </div>
                    <ul className={`todo-color-list ${colorMode ? 'active' : ''} `}>
                        <li className="todo-color-item red"></li>
                        <li className="todo-color-item green"></li>
                        <li className="todo-color-item blue"></li>
                        <li className="todo-color-item violet"></li>
                        <li className="todo-color-item orange"></li>
                        <li className="todo-color-item pink"></li>
                    </ul>
                </li>
            )
}

export default TodoItem