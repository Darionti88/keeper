import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'
import Zoom from '@material-ui/core/Zoom';
import Grow from '@material-ui/core/Grow';
import ExpandLessIcon from '@material-ui/icons/ExpandLess'


export default function CreateNote(props){

const [clicked, setClicked] = useState(false)
const [note, setNote] = useState({
    title:'',
    content:''
})

function handleChange(e){
    const {name, value} = e.target
    setNote((prevValue)=>{
        return {...prevValue, [name]: value}
    })
}

function handleExpand(){
    setClicked(false)
}

function handleClick() {
    setClicked(true)
}

    return(
        <React.Fragment >
        { clicked ? 
        <div className='form-box'>
                <form 
                className='form-note'
                action="">
                <Grow 
                in={true}>
                <ExpandLessIcon 
                onClick={handleExpand}
                className='expand-icon'/>
                </Grow>
                    <input
                    onChange={handleChange} 
                    name='title' 
                    type="text" 
                    placeholder='Title...'
                    value={note.title} />
                    <textarea
                    onChange={handleChange} 
                    name="content" 
                    id="" 
                    cols="30" 
                    rows="3"
                    onClick={handleClick} 
                    placeholder='Write your note here...'
                    value={note.content} />
                    <Zoom in={true}>
                    <Fab onClick={(e)=>{
                        e.preventDefault()
                        if(note.title === '' || note.content === ''){
                            alert('You missed something')
                        } else{props.addNote(note)
                        setNote({
                            title:'',
                            content:''
                        })}
                    }}>
                        <AddIcon />
                    </Fab>
                    </Zoom>
                </form>
                
            </div> : <div className='form-box'>
                <form 
                className='form-note'
                action="">
                    <textarea
                    onChange={handleChange} 
                    name="content" 
                    id="" 
                    cols="30" 
                    rows="1"
                    onClick={handleClick} 
                    placeholder='Write your note here...'
                    value={note.content} />
                </form>
                
            </div> }
        </React.Fragment>
    )
}