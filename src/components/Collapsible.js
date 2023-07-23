import React, { useRef, useState } from 'react';
import "../styles/components/collapsible.scss"
import Aboutbar from './Aboutbar';



const Collapsible = (props) => {
    const [open, setOpen] = useState(false);
    const toggle = () => {setOpen(!open)};

    const contentRef = useRef();

    return (
        <div className={`bar ${open ? 'open' : ''}`}>
            <Aboutbar/>   
                   
        <div onClick={toggle}  className={`button ${open ? 'rotated' : ''}`}>         
            <img src="../arrow_back_ios-24px 2.svg" alt="" />
        </div>

        <div className="content-parent"ref={contentRef} style={open ? { height: contentRef.current.scrollHeight + "px" } : { height: "00px" }}>
           <div className='content'>{props.children}</div>  
        </div>
        </div>   
        
    );
};

export default Collapsible;