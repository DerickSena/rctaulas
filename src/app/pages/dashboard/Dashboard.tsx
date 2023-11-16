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

            if(lista.some((ListItem) => ListItem.title === value)) return;

            TarefasServices.create({title:value, isCompleted:false })
            .then((result)=>{
                if(result instanceof ApiException){
                    alert(result.message);
                }else{
                    setLista((oldLista)=>[...oldLista,result, ]);
                }
            });
        }
    },[lista]);
    return (
        <div>
            <p>Lista</p>

            <input onKeyDown={handleInputKeyDown}/>

            <p>{lista.filter((listItem) => listItem.isCompleted).length}</p>
            <ul>
                {lista.map((ListItem)=> {
                    return <li key={ListItem.id}>
                        <input 
                        type="checkbox"
                        checked={ListItem.isCompleted}
                        onChange={() => {
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
