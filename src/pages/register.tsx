import {useState} from "react";
import {auth} from "../../firebase";
import {createUserWithEmailAndPassword} from "@firebase/auth";

export default function register(props:any){
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
        <>
            <h1>新規登録</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>メールアドレス</label>
                    <input
                        name="email"
                        type="email"
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>パスワード</label>
                    <input
                        name="password"
                        type="password"
                        value={registerPassword}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                    />
                </div>
                <button>登録する</button>
            </form>
        </>
    );
}