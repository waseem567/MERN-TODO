import React, { useEffect, useState } from 'react';
import "./Modal.css";
import Form from '../Forms/Form';
const Modal = props => {
    const [edit, setEdit] = useState(props.onEdit);
    const [modalIsOpened, setModalIsOpened] = useState(props.onEdit.open);
    const onCloseModal = (prm) => {
        props.showModal(!prm);
    };
    const onAddedTodo = prm => {
        props.onAdded(prm);
    };
    const onCloseModalHandler = () => {
        onCloseModal(true);
    };
    const stopPropagateHandle = event => {
        event.stopPropagation();
    };
    return (
        <div onClick={onCloseModalHandler} className='absolute left-0 top-0 h-screen w-screen p-0 m-0 box-border' style={{background: "rgba(0, 0, 0, 0.8)"}}>
        <div className='bg-white absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] h-max w-[90%] p-2 max-w-[700px]' onClick={stopPropagateHandle}>
            <div className="w-full h-full relative">
            <button onClick={onCloseModal} className='ml-auto block bg-red-400 rounded-md text-white px-1'>close</button>
             <Form onAddedTodo={onAddedTodo} editTodo={edit} closeModal={onCloseModal} />
            </div>
        </div>
        </div>
    );
}

export default Modal;
