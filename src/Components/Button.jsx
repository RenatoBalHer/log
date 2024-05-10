
const Button = ({text, onClick, disabled}) => {
    return (
        <>
            <button disabled={disabled} className="button" onClick={() => onClick}>{text}</button>   
        </>
    );
};

export default Button;