import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

  const [note, setNote]= useState({
    title: "",
    content: ""
  });

  const [textAreaClicked, setTextAreaClicked] = useState(false);
  const [rows, setRows]=useState("1")


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

function firstClickTextAria(){
  setTextAreaClicked(true);
  setRows("3")
}


  return (
    <div>
      <form className="create-note">
         {textAreaClicked && (<input onChange={edit} name="title" placeholder="Title" value={note.title} />)}
        <textarea onClick={firstClickTextAria} onChange={edit} name="content" placeholder="Take a note..." rows={rows} value = {note.content} />
        <Zoom in={textAreaClicked}>
          <Fab onClick={submitNote}>
          <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
