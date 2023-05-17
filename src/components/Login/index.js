import { useState } from "react"
import { auth } from "../../keys/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        }).catch((error) => {
            alert('Invalid email or password')
        })
    }

    return (
        <div className="dashboard">
            <form onSubmit={signIn}>
                <h1>Login</h1>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login