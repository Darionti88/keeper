import React, {useState} from 'react'
import 'fontsource-roboto';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer'
import Grow from '@material-ui/core/Grow';
import CreateNote from '../../Components/CreateNote'
import Note from '../../Components/Note'



function PageKeep(props) {

const [notita, setNotita] = useState([])

function addNote(note){
  setNotita((prevValue)=>{
    return [...prevValue, note]
  })
}

function deleteNote(id){
  setNotita((prevValue)=>{
    return prevValue.filter((item, index)=>{
    return index !== id
  })
  })
}

  return (
    <React.Fragment>
    <Header 
    headerName='Keeper by Gugul'/>
    <CreateNote 
    rows='0'
    addNote={addNote}/>
    {notita.map((notaItem, index)=>{
      return (
        <Grow in={true}>
        <Note 
      key={index}
      id={index}
    content={notaItem.content}
    title={notaItem.title}
    delete={deleteNote} />
    </Grow>
    )
    })}
    <Footer />
    </React.Fragment>
  );
}

export default PageKeep;
