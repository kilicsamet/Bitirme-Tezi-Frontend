import React, { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
const Hero = (props) => {
  const [selected, setSelected] = useState("");
  const [selectedRight, setSelectedRight] = useState("");
    let navigate = useNavigate();
    
    const handleClickButtonLeft = (leftButton) => {
        if (leftButton==="Model S") {
            navigate('/customeorders')
        }
        else if (leftButton==="Model X") {
            navigate('/customeorderx')
        }
        else if (leftButton==="Model 3") {
            navigate('/customeorder3')
        }
       else if (leftButton==="Model Y") {
            navigate('/customeordery')
        }
    }
    useEffect(() => {
        handleClickButtonLeft(selected)
      }, [selected])

      const handleClickButtonRight = (rightButton) => {
        if (rightButton==="Model S Araç Ekle") {
            navigate('/model-s-add')
        }
        else if (rightButton==="Model X Araç Ekle") {
            navigate('/model-x-add')
        }
        else if (rightButton==="Model 3 Araç Ekle") {
            navigate('/model-3-add')
        }
       else if (rightButton==="Model Y Araç Ekle") {
            navigate('/model-y-add')
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
                <div className="cta_actions pb-5 mb-5">
                    <div className="cta__buttons">
                        <button onClick={()=>setSelected(props.title)} className="button--primary">{props.leftButton}</button>
                        {props.rightButton &&
                            <button onClick={()=>setSelectedRight(props.title)} className="button--secondary ">{props.rightButton}</button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero