import React from 'react'
import Grow from '@material-ui/core/Grow';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export default function Note(props){

    return (
        <Grow in={true}>
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button><DeleteForeverIcon 
            onClick={()=>{
                props.delete(props.id)}}/>
            </button>
        </div>
        </Grow>
    )
}