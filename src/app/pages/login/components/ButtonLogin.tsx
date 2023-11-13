import { useContext } from "react";
import { UsuarioLogadoContext } from "../../../shared/contexts";


interface IButtonLoginProps{
    onClick: () =>void;
    type?: "button" | "submit" | "reset";
    children: React.ReactNode;
}
export const ButtonLogin: React.FC<IButtonLoginProps> = ({type , onClick , children}) => {

    const {nomeDoUsuario}=useContext(UsuarioLogadoContext);

    return(
        <button type={type} onClick={onClick}>
            {nomeDoUsuario}{children}
            Entrar
        </button>
    )
}