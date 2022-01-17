import React from 'react';
import './login.css';
import googleLogo from '../../images/googleLogo.png';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../firebaseConfig/firebaseConfig';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";



const LogIn = () => {

    const handleGoogleSignIn = () => {
        const app = initializeApp(firebaseConfig);
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
               console.log(user);
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });

    }
    return (
        <div className='login'>

            <p>You have to login first</p>
            <form className='form-div'>

                <div className="form-group">
                    <label >Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div> <br />
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label">New user</label>
                </div> <br />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <div className="googleSignIn">
                <h1>Or</h1>
                <img src={googleLogo} alt="" />
                <button onClick={handleGoogleSignIn} className='btn btn-success'>Log In With Google</button>
            </div>
        </div>

    );
};

export default LogIn;