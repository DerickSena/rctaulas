<<<<<<< HEAD
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { InputLogin } from "./components/inputLogin";
import { ButtonLogin } from "./components/ButtonLogin";
import { useUsuarioLogado } from "../../shared/hooks";


export const Login = () => {
    const inputPasswordRef = useRef<HTMLInputElement>(null);

    const {nomeDoUsuario} = useUsuarioLogado();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

   
    useEffect(() => {
        console.log(email)
    }, [email]);
    useEffect(() => {
        console.log(senha)
    }, [senha]);

    const emailLenght = useMemo(() => {
        return email.length;
    }, [email.length]);

    const handleEntrar = useCallback(() => {
        console.log(email)
        console.log(senha)

    }, [email, senha])


    return (
        <div>
            <form>

                <p>Quantidades de caracteres no Email: {emailLenght}</p>
                <p>{nomeDoUsuario}</p>
                <InputLogin
                    label="Email"
                    value={email}
                    onChange={newValue => setEmail(newValue)}
                    onPressEnter={() => inputPasswordRef.current?.focus()}
                />

                <InputLogin
                    label="Senha"
                    value={senha}
                    type="password"
                    ref={inputPasswordRef}
                    onChange={newValue => setSenha(newValue)}
                />
                
                {/*<button type="button" onClick={handleEntrar}>
                    Entrar
                </button>*/}
                <ButtonLogin type="button" onClick={handleEntrar} children={undefined}/>
            </form>
=======
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
>>>>>>> 87673a9d57f759da3428edf0dffc6edcfe8b97b9
        </div>
    );
}