import React from 'react'

function Notebox({ title,content }) {
    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}

export default Notebox
