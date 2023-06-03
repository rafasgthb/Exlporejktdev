import React, {Component} from 'react'
import { Button, Container, Grid, TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { firebaseAuthentication } from '../config/firebase'
import '../css/login.css'
import logo from '../../img/logo.png'
//import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';

export default class Registrasi extends Component{
    state = {
        email:'',
        password: ''
    }
    handleChangeField = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        const {email, password} = this.state
        if(password.length < 8){
            alert("Password should be at least 8 characters");
        }else{
            firebaseAuthentication.createUserWithEmailAndPassword(email, password)
            .then(res=>{
                firebaseAuthentication.currentUser.sendEmailVerification()
                .then(()=>{
                    alert('Mohon verifikasi email anda');
                    this.props.history.push('/login');
                })
                .catch((error)=>{
                    alert(error.message)
                })
            })
            .catch(err=>{
                alert(err.message)
            })
        }
    }
    render(){
        console.log("masuk sini");
        const {email, password} = this.state
        return(
            <Container className='row'>
                <Grid container justify="center"  id='form'>
                    <Grid>
                    <img src={logo} style={{width:"250px",display:"flex",paddingLeft:"25%"}}></img>
                        <form onSubmit={this.handleSubmit} id='textlogin'>
                            <TextField type="email" fullWidth margin="dense" variant="outlined" size="small" value={email} onChange={this.handleChangeField} name="email" label="Email" required />
                            <TextField type="password" fullWidth margin="dense" variant="outlined" size="small" value={password} onChange={this.handleChangeField} name="password" label="Password" required />
                            <br/> <br/><Button type="submit" fullWidth variant="contained" color="primary">Sign Up</Button>
                        </form>
                        <p>Have an account? <Link to="/login">Sign In</Link></p><br/>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}