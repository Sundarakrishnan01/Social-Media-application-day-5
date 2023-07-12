import { TextField } from "@mui/material";
import React, { useState } from "react";
import './login.css';
import Button from '@mui/material/Button';
import "./signup";
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// import GoogleIcon from '@mui/icons-material/Google';



function Signup() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [cnfpassword, setCnfPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate=useNavigate();
    const val = (password.length);

    const createAccount = async () =>
    {
        try{
            if(password !== cnfpassword){
                setError('Password and Confirm Password do not match');
                return;
            }
            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate('/home');
        }
        catch(e){
            setError(e.message);
        }
    }

    const signInWithGoogle = async () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
    
        try {
          const result = await signInWithPopup(auth, provider);
          const user = result.user;
          // You can access the user's information like user.displayName, user.email, etc.
          Cookies.set('Id', user.email);
          navigate('/home');
        } catch (e) {
          setError(e.message);
        }
      };


    return (
        <>
            <div style={{ display: "flex" }}>
                <div  >
                    <img className="image"src="images/wallpaperflare.com_wallpaper.jpg"
                        alt="Wallpaper"  />
                </div>
                <div className="box">
                

                


                    <h1 className="reg">Register</h1>
                    <div className="textLine" >
                        <div className="hloo1">
                            <TextField onChange={n => setName(n.target.value)} id="outlined-basic" label="Name" type="text" variant="outlined" required />
                        </div>
                        <div className="hloo1">
                            <TextField onChange={n => setEmail(n.target.value)} id="outlined-basic" label="Email" type="email" variant="outlined" required />
                        </div>
                        <div className="hloo1">
                            <TextField onChange={n => setPassword(n.target.value)} id="outlined-basic" label="Password" type="password" variant="outlined" required />
                        </div>
                        <div className="hloo1">
                            <TextField onChange={n => setCnfPassword(n.target.value)} id="outlined-basic" label="Confirm Password" type="password" variant="outlined" required />
                        </div>
                        {/* <div className="hloo1">
                            <TextField onChange={n => setEmail(n.target.value)} id="outlined-basic" label="Date of Birth dd/mm/yyyy"  variant="outlined" required />
                        </div> */}
                        <div >
                            <p>Have an account: <a href='/'>Log in</a></p>
                        </div>
                        
                <div className="button">
                    <center><Button variant="contained" value="submit"
                    onClick={createAccount}
                        
                    
                    >
                    Submit
                    </Button>
                    </center>
                </div>
                    </div>



                </div>



            </div>
        </>
    );
}
export default Signup;