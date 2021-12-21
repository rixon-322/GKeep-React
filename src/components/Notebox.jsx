import React from 'react'
import {MdDeleteOutline} from "react-icons/md"
import {MdOutlineEditNote} from "react-icons/md"

function Notebox({ title,content,onDelete,onUpdate,id }) {
    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={() => onDelete(id)}>
                <MdDeleteOutline size={25}/>
            </button>
            <button onClick={() => onUpdate(id)}>
                <MdOutlineEditNote size={25}/>
            </button>
        </div>
    )
}

export default Notebox
