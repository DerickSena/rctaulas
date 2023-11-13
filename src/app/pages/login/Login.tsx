import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { InputLogin } from "./components/inputLogin";
import { ButtonLogin } from "./components/ButtonLogin";
import { UsuarioLogadoContext } from "../../shared/contexts";

export const Login = () => {
    const inputPasswordRef = useRef<HTMLInputElement>(null);

    const {nomeDoUsuario} = useContext(UsuarioLogadoContext);
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
        </div>
    );
}