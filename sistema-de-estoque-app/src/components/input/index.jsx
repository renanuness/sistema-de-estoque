import './styles.css';

export default function Input(props) {
    const type = props.type; 
    const placeholder = props.placeholder; 
    const id = props.id; 
    const className = props.className;
    const callbackFn = props.onChangeFn;

    function updateValue(e){
        e.preventDefault();
        console.log(e.target.value);
        callbackFn(e.target.value);
    }
    return (
            <input className={className} placeholder={placeholder} type={type} id={id} onChange={updateValue}></input>
    )
}