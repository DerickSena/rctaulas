import { useEffect, useState } from "react";

export const Login = () => {
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');

    useEffect(() =>{
        if(window.confirm('você é homem?')){
            console.log('Homem')
        }else{
            console.log('Mulher')
        }
    },[]);


    const handleEntrar =()=>{
        console.log(email)
        console.log(senha)
    }

    return(
        <div>
           <form>
                <label>
                    <span>Email</span>
                    <input value={email} onChange={e => setEmail(e.target.value)}/>
                </label>
                <label>
                    <span>Senha</span>
                    <input type="password" value={senha} onChange={e => setSenha(e.target.value)}/>
                </label>
                <button type="button" onClick={handleEntrar}>
                    Entrar
                </button>
           </form>
        </div>
    );
}