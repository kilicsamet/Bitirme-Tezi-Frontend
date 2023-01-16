import React, { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
const Hero = (props) => {
  const [selected, setSelected] = useState("");
  const [selectedRight, setSelectedRight] = useState("");
    let navigate = useNavigate();
    
    const handleClickButtonLeft = (leftButton) => {
        if (leftButton==="Model S Araçlar") {
            navigate('/admin/model-s')
        }
        else if (leftButton==="Model X Araçlar") {
            navigate('/admin/model-x')
        }
        else if (leftButton==="Model 3 Araçlar") {
            navigate('/admin/model-3')
        }
       else if (leftButton==="Model Y Araçlar") {
            navigate('/admin/model-y')
        }
    }
    useEffect(() => {
        handleClickButtonLeft(selected)
      }, [selected])

      const handleClickButtonRight = (rightButton) => {
        if (rightButton==="Model S Araç Ekle") {
            navigate('/admin/model-s-add')
        }
        else if (rightButton==="Model X Araç Ekle") {
            navigate('/admin/model-x-add')
        }
        else if (rightButton==="Model 3 Araç Ekle") {
            navigate('/admin/model-3-add')
        }
       else if (rightButton==="Model Y Araç Ekle") {
            navigate('/admin/model-y-add')
        }
    }
    useEffect(() => {
        handleClickButtonRight(selectedRight)
      }, [selectedRight])
    return (
        <>
            <div className="itemText " >
                <div className="itemText__info ">
                    <h1>{props.title}</h1>
                    <h4>
                        {props.description}
                        {props.descriptionSpan && <span>{props.descriptionSpan}</span>}
                    </h4>
                </div>
                <div className="cta_actions ">
                    <div className="cta__buttons">
                        <button onClick={()=>setSelected(props.leftButton)} className="button--primary">{props.leftButton}</button>
                        {props.rightButton &&
                            <button onClick={()=>setSelectedRight(props.rightButton)} className="button--secondary">{props.rightButton}</button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero