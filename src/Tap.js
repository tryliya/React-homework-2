import React from 'react'


export const Tap = ({label, onClick}) => {
    return (
        <button onClick={onClick}>{label}</button>
    )
}


export default Tap;