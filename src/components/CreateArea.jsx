import React, { useState } from "react";

function CreateArea(props) {

  const [note, setNote]= useState({
    title: "",
    content: ""
  });



  function edit(event){

    if (event.target.name === "title"){
      setNote(prev=>{
        return {...prev, title: event.target.value}
      })
    } else if (event.target.name === "content"){
      setNote(prev=>{
        return {...prev, content: event.target.value}
      })
    }
  }

  function submitNote(event){
    props.onAdd(note);
    setNote({title: "",
    content: ""})
    event.preventDefault();
  }




  return (
    <div>
      <form >
        <input onChange={edit} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={edit} name="content" placeholder="Take a note..." rows="3" value = {note.content} />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
