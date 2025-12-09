
function Button(props){

    const { type, disabled, children, onClick } = props;
    return <button className="text-blue-400" type={type} disabled={disabled} onClick={onClick}>{children}</button>
}

export default Button;