import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase';
import './Login.css';
import { useStateValue } from './StateProvider';
import { actionTypes } from "./reducer";

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider).then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            });
        }).catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://i.pcmag.com/imagery/reviews/07td46ju7p6lLVb0QGwc5VF-6.1569479844.fit_scale.size_1028x578.jpg" />
                <h1>Sign in to Slack Clone</h1>
                <p>bogdanghita.slack.com</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login
