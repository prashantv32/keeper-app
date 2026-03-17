import { useState } from "react"

import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
export function CreateNote(props){
    const [notes,setNotes] = useState({
        title:"",
        content:""
    });

    function handleChange(event){
        const { name , value } = event.target;

        setNotes(prevNote => {
            return {
                ...prevNote,
                [name]: value 
            }
        })
    }

    function submitNote(event){
        props.onAdd(notes);
        setNotes({
            title:"",
            content:""
        })
        event.preventDefault();
    }


    return <>
    <div  style={{marginTop:"100px"}}>
        <form style={{width:"600px",display:"flex",flexDirection:"column"}}>

            <input 
            name="title" 
            onChange={handleChange} 
            value={notes.title} 
            placeholder="title" 
            />
            

            <textarea 
            name="content" 
            onChange={handleChange} 
            value={notes.content} 
            placeholder="take a note" 
            rows="3" />

            <button onClick={submitNote}><AddIcon /></button>
        </form>
    </div>
    
    </>
}
