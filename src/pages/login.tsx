import React, {useState, useEffect, ReactElement} from "react";
import {
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";
import { auth } from "../../firebase";
import Script from "next/script";
import AuthLayout from "../../components/layout/AuthLayout";


function Login ():JSX.Element {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );

            alert('ログインしました')
        } catch(error) {
            alert("メールアドレスまたはパスワードが間違っています");
        }
    };
    const [user, setUser] = useState();
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser:any) => {
            return setUser(currentUser);
        });
    });

    return (
        <div className="login" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <form method="post">
                <input type="email"
                       value={loginEmail}
                       onChange={(e)=>setLoginEmail(e.target.value)}
                       name="email" placeholder="Username"
                       required={true}
                />

                <input
                    type="password"
                    name="password"
                    value={loginPassword}
                    onChange={(e)=>setLoginPassword(e.target.value)}
                    placeholder="Password"
                    required={true}/>
                <button type="submit" className="btn btn-primary btn-block btn-large">Let me in.</button>
            </form>
        </div>
    );
};

Login.getLayout=function getLayout(page:ReactElement){
    return (
        <AuthLayout>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></Script>
            {page}
        </AuthLayout>
    )
}

export default Login;