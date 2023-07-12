import { TextField } from "@mui/material";
import React, { useState } from "react";
import './login.css';
import Button from '@mui/material/Button';
import "./signup";
import { initializeApp, firebaseConfig } from 'firebase/app';
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';




function Login() {
    const navigate = useNavigate();

    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const val = (password.length);


    return (
        <>
            <div style={{ display: "flex" }}>
                <div  >
                    <img className="image" src="https://th.bing.com/th/id/R.74891c99c9c972ef4fadc15e7b8944fd?rik=ZbtoBImcxn4e3w&riu=http%3a%2f%2fwww.graphicsite.ch%2fimages%2fGurus%2fWallpaperForest.jpg&ehk=t%2fdLDGsKVLpRacnBFNC2%2b0GU3Y%2biyYkaMUMq3L%2fmy0o%3d&risl=&pid=ImgRaw&r=0"
                        alt="Wallpaper" />
                </div>
                <div className="box">





                    <h1>Sign in</h1>
                    <div className="textLine" >
                        <div className="hloo">
                            <TextField onChange={n => setName(n.target.value)} id="outlined-basic" label="Name" type="text" variant="outlined" required />
                        </div>
                        <div className="hloo">
                            <TextField onChange={n => setPassword(n.target.value)} id="outlined-basic" label="Password" type="password" variant="outlined" required />
                        </div>
                        <div >
                            <p>New User: <a href='/signup'>Register</a></p>
                        </div>
                        <div >
                            <p>Forgot Password: <a href='/resetpwd'>Reset password</a></p>
                        </div>
                        <div className="button">
                            <center><Button variant="contained" value="submit"
                                onClick={()=>navigate('/home')}
                            >
                                Sign in
                            </Button>

                            </center>
                            <br/>
                        </div>
                        
                        <div className="button">
                            <center><Button variant="contained" value="submit"
                                onClick={() =>
                                    logout()

                                }
                            >
                                Logout
                            </Button>

                            </center>
                        </div>
                    </div>



                </div>



            </div>
        </>
    );
}
export default Login;