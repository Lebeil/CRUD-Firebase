import React, {useRef, useState} from 'react';
import { auth } from "../utils/firebase.config";

const SignUp = () => {
    const registerEmail = useRef();
    const registerPassword = useRef();
    const [displayName, setDisplayName] = useState("")

    const handleRegister = (e)=> {
        e.preventDefault()

        try {
            auth.createUserWithEmailAndPassword(
                registerEmail.current.value,
                registerPassword.current.value
            ).then(async (userAuth) => {
                await userAuth.user.updateProfile({
                    displayName
                })
                console.log(userAuth)
            });
        } catch(error) {
            console.log(error.message)
        }
    }

    return (
        <div className='signup-container'>
            <div className='signup'>
                <h3>S'inscrire</h3>
                <form onSubmit={e => handleRegister(e)}>
                    <input type="text" placeholder="Pseudo" onChange={(e) => setDisplayName(e.target.value)} required/>
                    <input type="email" placeholder="Email" ref={registerEmail} required/>
                    <input type="password" placeholder="Mot de passe" ref={registerPassword} required/>
                    <input type="submit" value="validre l'inscription" required/>
                </form>
            </div>
        </div>
    );
};

export default SignUp;