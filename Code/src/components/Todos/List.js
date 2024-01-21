import Todo from "./Todo";

const List = props => {
  const onDeleteRender = (param) => {
    props.postDeleteTodo(param);
  };
  const editTodoHandler = todoObj => {
    props.todoEdit(todoObj);
  }; 
  const todos = props.todos || [];
    return <div className="list w-full">
      <div className="flex justify-between items-center flex-col rounded-sm ">
        {todos.map(todo => <Todo todo={todo} key={Math.random()} onDelete={onDeleteRender} editTodo={editTodoHandler}/>)}
        {todos.length < 1 && <h1 className="py-4">No Todo Yet...</h1>}
      </div>  
    </div>
};
export default List;