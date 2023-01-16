import React from 'react'
import Hero from './Hero';

const Section = (props) => {
    const bgImgPath = `/images/${props.backgroundImage}`
    const style = {
        backgroundImage: 'url(' + bgImgPath + ')',
    }
    return (
        <div className='wrap' style={style}  >
            <Hero
                title={props.title}
                leftButton={props.leftButton}
                rightButton={props.rightButton} />
        </div>
    )
}

export default Section