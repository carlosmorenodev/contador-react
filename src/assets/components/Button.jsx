import React from 'react'
import '../styles/Button.css';


const Button = ({ name, action, isMore }) => {



    return (
        <button
            onClick={action}
            /* className={isMore ? 'blue' : 'red'} */
        >
            {name}
        </button>
    )
}

export default Button