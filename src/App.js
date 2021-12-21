import './App.css';

import Header from './components/Header';
import Addtextbox from './components/Addtextbox';
import Notebox from './components/Notebox';
import { useState } from 'react';

function App() {
  const [notes,setNote] = useState([])

  function addNote(newNote){
  setNote((preValue) => {
    return [...preValue, newNote];
  })
  }

  function deleteNotes(id) {
    setNote((preValue) => {
      return [...preValue.filter((note, index) => 
      index !== id)]; 
    })
  }


  return (
     <div> 
      <Header/>
      <Addtextbox onAdd={addNote}/>
      {notes.map((note, index) => (
        <Notebox
        key={index}
        id={index}
        title={note.title}
        content={note.content}
        onDelete={deleteNotes}
        />
      ))}
     </div>
  );
}

export default App;
