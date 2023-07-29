import TodoItem from "./TodoItem"

const TodoTable = ( {list}) => {
return (
    <ul className="todo-list">
        {list.map((todoItem) => {
         return  <TodoItem key={todoItem.id} item={todoItem}/>
        })}
    </ul>
)
}

export default TodoTable