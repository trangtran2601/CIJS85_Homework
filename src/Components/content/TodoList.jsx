import { useCallback, useState } from "react";
import  { TodoItemContext ,TodoContext, EditContext, FilterContext} from "./Context";
import ToggleButton from './ToggleButton';
import AddNewSection from './AddNewSection';
import FilterSection from './FilterSection';
import TodoTable from "./TodoTable";

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

export const FILTER_OPTIONS = {
    DEFAULT: 0,
    COMPLETED: 1,
    UNCOMPLETED: 2
}

const TodoList = () => {
    
    const [todoList, setTodoList] = useState(mytodoList)
    const [todoItem, setTodoItem] = useState({id: 0, name: '', isCompleted: false})
   const [isEdit, setIsEdit] = useState(false)
   const [selectedFilter, setSelectedFilter] = useState(FILTER_OPTIONS.DEFAULT)

   const filteredTodoList = useCallback(() => {
     let filteringTodoList = [...todoList]
     switch (+selectedFilter) {
        case FILTER_OPTIONS.COMPLETED:
            console.log(filteringTodoList)
          return  filteringTodoList.filter((item) => item.isCompleted === true)
          
        case FILTER_OPTIONS.UNCOMPLETED:
            console.log(filteringTodoList)
           return filteringTodoList.filter((item) => item.isCompleted === false)
          
        case  FILTER_OPTIONS.DEFAULT:
        default:
            return filteringTodoList
     }
     
   },[selectedFilter, todoList])
return (
    <FilterContext.Provider value={[selectedFilter, setSelectedFilter]}>
    <EditContext.Provider value={[isEdit, setIsEdit]}>
        <TodoContext.Provider value={[todoList, setTodoList]}> 
            <TodoItemContext.Provider value={[todoItem, setTodoItem]}>
                <div className="wrapper">
                    <ToggleButton />
                    <div className="content">
                        <AddNewSection />
                        <FilterSection />
                        <TodoTable list={filteredTodoList()} />
                    </div>
                </div>
            </TodoItemContext.Provider>
        </TodoContext.Provider>
    </EditContext.Provider>
    </FilterContext.Provider>
)

}

export default TodoList