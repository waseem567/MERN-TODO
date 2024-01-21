import React, {useState} from "react";
const Error = props => {
    const [showError, setError] = useState(true);
    const closeModalHandler = () => {
        props.serverErrorClose(true);
        setError(false);
    };
    return <div className={`absolute left-0 top-0 h-screen w-screen p-0 m-0 box-border ${!showError ? "hidden" : ""}`} onClick={closeModalHandler} style={{background: "rgba(0, 0, 0, 0.8)"}} >
        <div className='bg-white absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] h-max w-[90%] p-2 max-w-[700px] rounded-2xl' >
            <div className="w-full h-full relative text-center font-bold">
                <div><i className="fa-solid fa-ban text-6xl my-6 text-red-500"></i></div>
                Server Not Found!!!
            </div>
        </div>
        
    </div>
        
  
};

export default Error;