import { Header } from "./components/header"
import {Footer} from "./components/footer"
import {Note} from "./components/note"
import { useState } from "react"
import {CreateNote} from "./components/createNote"

function App() {

  const [notes,setNotes] = useState([]);
  function addNote(newNote){
    setNotes(prevNote => (
      [...prevNote,newNote]
    ));
    

  }
  function deleteNote(id){
    setNotes(prevNotes=>{
      return prevNotes.filter((noteItem,index)=>{
        return index !== id;
      })
    })

  }


  return (
    <>
    
    <Header />
    <CreateNote onAdd={addNote}/>
    
    {notes.map((noteItem,index)=>{
      return (
      <Note 
      key={index}
      id={index}
      title={noteItem.title} 
      content={noteItem.content} 
      onDelete={deleteNote} 
      />)
    })}
    
    <footer style={{position:"absolute",textAlign:"center",bottom:"0",width:"100%",height:"2.5rem"}}><Footer/></footer>
    </>
  )
}

export default App
