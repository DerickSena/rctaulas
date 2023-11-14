import {useCallback, useEffect, useState} from "react";

import { ITarefa, TarefasServices } from "../../shared/services/api/tarefas/TarefasServices";
import { ApiException } from "../../shared/services/api/ApiException";


export const Dashboard = () => {
    const [lista,setLista] = useState<ITarefa[]>([]);

    useEffect(()=> {
        TarefasServices.getAll()
        .then((result)=>{
            if(result instanceof ApiException){
                alert(result.message);
            }else{
                setLista(result);
            }
        })
    },[])
   
    const handleInputKeyDown:React.KeyboardEventHandler<HTMLInputElement>  = useCallback((e)=>{
        if(e.key === 'Enter'){
            if(e.currentTarget.value.trim().length === 0) return;

            const value = e.currentTarget.value;

            e.currentTarget.value = '';

            setLista((oldLista)=>{
                if(oldLista.some((ListItem) => ListItem.title === value)) return oldLista;

                return[...oldLista,
                    {
                    title:value,
                    isCompleted:false,
                    id: oldLista.length,
                    }];
            });
        }
    },[]);
    return (
        <div>
            <p>Lista</p>
            <input onKeyDown={handleInputKeyDown}/>

            <ul>
                {lista.map((ListItem)=> {
                    return <li key={ListItem.id}>
                        <input 
                        type="checkbox"
                        onChange={()=>{
                            setLista(oldLista =>{
                                return oldLista.map(oldListItem => {
                                    const newisCompleted = oldListItem.title === ListItem.title 
                                    ? !oldListItem.isCompleted
                                    : oldListItem.isCompleted;
                                    return{
                                        ...oldListItem,
                                        isCompleted: newisCompleted,
                                    }
                                });
                            })
                        }}
                        />
                        {ListItem.title}
                    </li>;
                })}
            </ul>

        </div>
    )
}
