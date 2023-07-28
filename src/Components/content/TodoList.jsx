import { useState } from "react";
import  { TodoItemContext ,TodoContext, EditContext} from "./Context";
import TodoItem from "./TodoItem"
import ToggleButton from './ToggleButton';
import AddNewSection from './AddNewSection';
import FilterSection from './FilterSection';


const mytodoList = [
{
    id: 1,
    name: "Do homework",
    isCompleted: false    
},
{
    id: 2,
    name: "Shopping",
    isCompleted: true    
},
{
    id: 3,
    name: "Do homework",
    isCompleted: false    
},
{
    id: 4,
    name: "Do homework",
    isCompleted: false    
}

]

const TodoList = () => {
    
    const [todoList, setTodoList] = useState(mytodoList)
    const [todoItem, setTodoItem] = useState({id: 0, name: '', isCompleted: false})
   const [isEdit, setIsEdit] = useState(false)
return (
    <EditContext.Provider value={[isEdit, setIsEdit]}>
        <TodoContext.Provider value={[todoList, setTodoList]}> 
            <TodoItemContext.Provider value={[todoItem, setTodoItem]}>
                <div className="wrapper">
                    <ToggleButton />
                    <div className="content">
                        <AddNewSection />
                        <FilterSection />
                        <ul className="todo-list">
                            {todoList.map((todoItem) => {
                                return  <TodoItem key={todoItem.id} item={todoItem}/>
                            })}
                        </ul>
                    </div>
                </div>
            </TodoItemContext.Provider>
        </TodoContext.Provider>
    </EditContext.Provider>
)

}

export default TodoList