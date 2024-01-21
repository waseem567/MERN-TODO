import List from "../Todos/List";
// import Form from "../Forms/Form";
import Modal from "../modal/Modal";
import {useEffect, useState} from "react";
const Main = () => {
  const [added, setAdded] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [todos, setTodos] = useState([]);
  const [modal, setModal] = useState({open:false, editTodo:false ,editAbleTodo: {}});
  const [editAble, setEditAble] = useState({});
  // fetching all todos
  useEffect(()=> {
    async function sendRequest(){
      fetch("/todos").then(resp => resp.json()).then(res => setTodos(res)).catch(err => console.log(err))
    };
    sendRequest();
  }, [added, deleted]);
  const addedRerenderer = add => {
    if(add){
      setModal((prev => {
        return {open:true,editTodo:false ,editAbleTodo: {}}
      }));
      setAdded(prev => !added);
    } 
  };
  const postDeleteRefresher = (del) => {
    if(del) setDeleted(prev => !deleted);
  };
  const undoneTodos = todos.filter(todo => todo.status === "TODO");
  const doneTodos = todos.filter(todo => todo.status === "DONE");
  const openModalHandler = () => {
    setModal(prevState => {
      return {open: true, editAbleTodo: {}};
    });
  };
  const modalVisibilityHandler = status => {
    setModal(prevState => {
      return {open: status, editAbleTodo: {}};
    });
  };
  const onTodoEdit = obj => {
    setEditAble(prev => obj);
    setModal(prev => {
      return {open:true, editTodo:true , editAbleTodo: obj}
    }) 
  };
  const editTodoObject = {editTodo: modal.editTodo,todo:modal.editAbleTodo, open:modal.open};
  return <div className="wrapper flex flex-col justify-center items-center border p-2 max-w-[700px] mx-auto">
    {/* card top nav */}
    {modal.open && <Modal showModal={modalVisibilityHandler} onAdded={addedRerenderer} onEdit={editTodoObject}/>}
    <div className="w-full flex justify-between items-center p-2">
      <span className="font-extrabold">Todos</span>
      <span onClick={openModalHandler}><i className="fa-solid fa-plus cursor-pointer hover:bg-slate-100 rounded-full h-[25px] w-[25px] flex justify-center items-center"></i></span>
    </div>
    <div className="w-full flex justify-between items-center border p-2">
      <span><i className="fa-solid fa-check cursor-pointer"></i> <span className="bg-blue-300 rounded-sm px-1 ml-2 text-white">0{undoneTodos.length}</span></span>
      <span><i className="fa-solid fa-check-double cursor-pointer"></i> <span className="bg-blue-300 rounded-sm px-1 ml-2 text-white">0{doneTodos.length}</span></span>
    </div>
    <List todos={todos} postDeleteTodo={postDeleteRefresher} todoEdit={onTodoEdit}/>
  </div>
};
export default Main;