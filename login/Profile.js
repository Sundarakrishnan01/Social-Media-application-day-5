import React from 'react';
import './Profile.css';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Button from '@mui/joy/Button';
import Cookies from 'js-cookie';

const Profile = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const login = async() => {
        try{
            await signInWithEmailAndPassword(getAuth(), email, password);
            Cookies.set('loginId', email);
            navigate('/profile/profiledetails');
            window.location.reload();
            
        }
        catch (e) {
            setError(e.message);
        }
    }
    return (
        <div style={{marginTop: "80px"}}>
            <h1>Welcome</h1>
            {error && <p className="error">{error}</p>}
            <div class="border border-dark pb-3 rounded-lg" style={{width: "33%", marginLeft: "33%"}}>
                <div class="text-center p-1 mb-2 text-light " style={{background: "#016b7a"}}>
                    <h2>User</h2>
                </div>
                <form id="logf">
                    <div class="form-group ml-3 mr-3">
                        <label class="text-inverse">UserName(Your email)</label>
                        <input id="logfiu1" class="form-control" type="email" placeholder="Enter Email" name="nlogfiu1" value={email}
                        onChange={e => setEmail(e.target.value)} required></input>
                    </div>
                    <div class="form-group ml-3 mr-3">
                        <label class="text-inverse">Password</label>
                        <input id="logfip1" class="form-control" type="password" placeholder="Enter Password" name="nlogfip1" value={password}
                        onChange={e => setPassword(e.target.value)} required></input>
                    </div>
                    <div class="form-check ml-3 ">
                        <input id="logfic1" class="form-check-input" type="checkbox" name="nlogfic1"></input>
                        <label class="form-check-label" for="exampleCheck1">Show Password</label>
                    </div>
                    <div class="form-group ml-3 mr-3 mt-2 mb-2">
                    <Button id="logfib1" class="form-control" type="button" style={{background: "#4CAF50", color: "#ffffff", width: "100%"}} name="nlogfib1 " onClick={login}>LOGIN</Button>
                        <div class=" mt-3 mr-3" style={{marginTop: "5%"}}>
                            <i>New user? </i>
                            <a href="/newprofile">Click here</a>
                        </div>
                        <div class=" mt-3 mr-3" style={{marginTop: "5%"}}>
                            <i>Forgot Password</i>
                            <a href="">Click here</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Profile;
