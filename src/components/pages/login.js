import React, {Component} from 'react'
import { Button, Container, Grid, TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { firebaseAuthentication } from '../config/firebase'
import '../css/login.css'
import logo from '../../img/logo.png'

export default class Login extends Component{
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
        firebaseAuthentication.signInWithEmailAndPassword(email, password)
        .then(res=>{
            console.log(res)
            if(res.user.emailVerified){
                this.props.history.push('/home')
            }else{
                alert('Verifikasi email anda terlebih dahulu!')
                firebaseAuthentication.signOut()
            }
        })
        .catch(error=>{
            alert(error.message)
        })
    }
    render(){
        const {email, password} = this.state
        const mystyle = {
            color: "black",
            padding: "10px",
            textAlign: "center",
            fontFamily: "Arial"
          };
        return(
            <Container class='row'>
                <Grid container justify="center" id='form'>
                    <Grid>
                        <img src={logo} style={{width:"250px",marginLeft:"65px"}}></img>
                        <form onSubmit={this.handleSubmit} id='textlogin' >
                            <TextField type="email" fullWidth margin="dense" variant="outlined" size="small" value={email} onChange={this.handleChangeField} name="email" label="Email" required />
                            <TextField type="password" fullWidth margin="dense" variant="outlined" size="small" value={password} onChange={this.handleChangeField} name="password" label="Password" required /><br/><br/>
                            <p>Forgot your password? <Link to="/forgot-password">Reset Password</Link></p><br/>
                            <Button type="submit" fullWidth variant="contained" style={{backgroundColor:"#ed8523", color:"#ffffff"}}>Sign in</Button>
                        </form>
                        <p style={{paddingTop:"20px",paddingLeft:"20px",paddingBottom:"20px"}}>Don't have an account? <Link to="/register">Sign Up</Link><br/><br/>
                        <Link to="/">Go to Homepage </Link><br/></p>
                        </Grid>
                </Grid>
            </Container>
        )
    }
}