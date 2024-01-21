import React, { useState } from 'react';
import "./Form.css";
const Form = (props) => {
    const [todo, setTodo] = useState("");
    const [todoIsValid, setTodoIsValid] = useState(false);
    const [editAbleTodo, setEditAbleTodo] = useState(props.editTodo);
    const [edit, setEdit] = useState(props.editTodo.todo.text || "");
    // on todo input change
    const onTodoChangeHandler = e => {
        if(!editAbleTodo.editTodo){
            setTodo(prev => e.target.value);
            setTodoIsValid(false);
        }else{
            setEdit(prevValue => e.target.value);
            setTodoIsValid(false);
        }
       
    };
    // on form submit
    const onAddNewTodoHandler = e => {
        e.preventDefault();
        console.log(editAbleTodo);
        if(!editAbleTodo.editTodo){
            if(todo.trim() === ""){
                setTodoIsValid(true);
                return;
            }
            fetch("/todo", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    text: todo
                })
            }).then(res => res.json()).then(todo => {
                props.onAddedTodo(true);
                props.closeModal(true);
                return;
            }).catch(err => console.log(err))
        }else{
            if(edit.trim() === ""){
                setTodoIsValid(true);
                return;
            }
            fetch("/edit", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    id: props.editTodo.todo.id,
                    text: edit,
                })
            }).then(res => res.json()).then(todo => {
                props.onAddedTodo(true);
                props.closeModal(true);
                return;
            }).catch(err => console.log(err))
        
        }
        }
        
    return (
        <div className='w-full'>
           <form className='w-full' onSubmit={onAddNewTodoHandler}>
                <input value={editAbleTodo.editTodo ? edit : todo} onChange={onTodoChangeHandler} className={`${todoIsValid ? "border border-red-500" : "border"} py-2 my-2 w-full pl-1 outline-none`} type="text" placeholder='Enter todo here...' />
                <input className='py-2 my-2 bg-blue-300 text-white block w-1/2 outline-none mx-auto cursor-pointer' type="submit" value={`${editAbleTodo.editTodo ? "EDIT TODO" : "ADD TODO"}`} />
           </form>
        </div>
    );
}

export default Form;
