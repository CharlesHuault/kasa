import React, { useRef, useState } from 'react';
import "../styles/components/collapsible.scss"




const Collapsible = (props) => {
    const [open, setOpen] = useState(false);
    const toggle = () => {setOpen(!open)};

    const contentRef = useRef();

    return (
        <div className={`bar ${open ? 'open' : ''}`}>
        <div className='closedbar'>
                <h3>{props.title}</h3>       
        <div onClick={toggle}  className={`button ${open ? 'rotated' : ''}`}>         
            <img src="../arrow_back_ios-24px 2.svg" alt="" />
        </div>
        </div>
        <div className="content-parent"ref={contentRef} style={open ? { height: contentRef.current.scrollHeight + "px" } : { height: "0px" }}>
           <div className='content'>{props.content}{props.children}</div>  
        </div>
        </div>   
        
    );
};

export default Collapsible;