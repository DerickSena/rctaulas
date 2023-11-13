import { createContext } from "react";

interface IUsuarioLogadoContextData{
    nomeDoUsuario:string;  
}
interface IUsuarioLogadoProviderProps{
    children: React.ReactNode;
}
export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider : React.FC <IUsuarioLogadoProviderProps> = ({children}) => {
    return(
        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: 'Derick' }}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
}