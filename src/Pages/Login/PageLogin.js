import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header/Header'
import Button from '@material-ui/core/Button';
import './PageLogin.css'


export default function PageLogin(props){
    return(
        <React.Fragment>
        <Header
         goToWinb={()=>{
            props.history.push('/whenisbirthday')
            }} 
        goToKeeper={()=>{
            props.history.push('/keeper')
        }}
        headerName='Login' />
        <div className="container-login">
        <div className="container-card">
            <h1>Welcome to keeper</h1>
            <Button onClick={(e)=>{
                e.preventDefault()
                props.history.push('/keeper')
            }}
            variant="outlined">
                Login
            </Button>
        </div>
        </div>
        <Footer />
        </React.Fragment>
    )
}