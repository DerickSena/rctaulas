interface IInputLoginProps{
    label: string;
    value: string;
    type?: string;
    onPressEnter?: ()=> void;
    onChange: (value:string)=> void;
}
export const InputLogin:React.FC<IInputLoginProps> = (props) => {
    return (
        <label>
            <span>{props.label}</span>
            <input 
                type={props.type}
                value={props.value}
                onChange={e => props.onChange(e.target.value)}
                onKeyDown={e => e.key === 'Enter'
                ? props.onPressEnter && props.onPressEnter() : undefined}
            />
        </label>
    )
}