import React, { useState, useEffect } from "react";
import {
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    /* ↓関数「handleSubmit」を定義 */
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

    /* ↓ログインを判定する設定 */
    const [user, setUser] = useState();

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser:any) => {
            return setUser(currentUser);
        });
    });

    return (
        <>
            <h1>ログインページ</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>メールアドレス</label>
                    <input
                        name="email"
                        type="email"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>パスワード</label>
                    <input
                        name="password"
                        type="password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                    />
                </div>
                <button>ログイン</button>
            </form>
        </>
    );
};

export default Login;