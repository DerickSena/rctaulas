import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { InputLogin } from "./components/inputLogin";

export const Login = () => {
    const inputPasswordRef = useRef<HTMLInputElement>(null);


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
                    onChange={newValue => setSenha(newValue)}
                    onPressEnter={() => inputPasswordRef.current?.focus()}
                />
                

                <button type="button" onClick={handleEntrar}>
                    Cadastrado
                </button>
            </form>
        </div>
    );
}