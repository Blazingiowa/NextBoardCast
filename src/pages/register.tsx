import {ReactElement, useState} from "react";
import {auth} from "../../firebase";
import {createUserWithEmailAndPassword} from "@firebase/auth";
import AuthLayout from "../../components/layout/AuthLayout";
import Script from "next/script";

function Register(props:any):JSX.Element{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [registerEmail, setRegisterEmail] = useState<string>("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [registerPassword, setRegisterPassword] = useState<string>("");

    const handleSubmit=async (e:any)=>{
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );

            alert('正しく登録されました')
        } catch(error) {
            console.log(error)

            alert("正しく入力してください");
        }
    }

    return (
            <div className="login" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <form method="post">
                    <input type="email"
                           value={registerEmail}
                           onChange={(e)=>setRegisterEmail(e.target.value)}
                           name="email" placeholder="Username"
                           required={true}
                    />

                    <input
                        type="password"
                        name="password"
                        value={registerPassword}
                        onChange={(e)=>setRegisterPassword(e.target.value)}
                        placeholder="Password"
                        required={true}/>
                    <button type="submit" className="btn btn-primary btn-block btn-large">Let me in.</button>
                </form>
            </div>
    );
}

Register.getLayout=function getLayout(page:ReactElement){
    return(
        <AuthLayout>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></Script>
            {page}
        </AuthLayout>
    )
}

export default Register;