import React, { useState } from 'react'

function Addtextbox({ onAdd}) {
    const [note, setNote] = useState({
        title: "",
        content: "",
    })

    function handleChange(e) {
        const { name, value } = e.target;
        setNote((preValue) => {
            return {
                ...preValue,
                [name]: value,
            }
        })
    }

    function submitButton(event) {
        onAdd(note);
        setNote({
            title: "",
            content: "",
        });
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input value={note.title} 
                    type="text" placeholder="Title" name="title"
                    onChange={handleChange}/>
                <p>
                    <textarea value={note.content} 
                        name="content" placeholder="Take a note..."
                        onChange={handleChange}>
                    </textarea>
                </p>
                <button onClick={submitButton}>+</button>
            </form>
        </div>
    )
}

export default Addtextbox
