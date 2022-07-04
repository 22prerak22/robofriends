import React from 'react'

function Scroll(props) {
    return (
        <div style={{ overflow: 'scroll', border: '3px solid black', height: '80vw' }}>
            {props.children}
        </div>
    )
}

export default Scroll