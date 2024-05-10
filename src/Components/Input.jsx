
const Input = ({label, type, placeholder, name, data, setData}) => {
    return (
        <div className="ipt-container">
            <label htmlFor="">{label}</label>
            <input value={data[name]} onChange={(e) => setData({...data,[name]:e.target.value})} name={name} className="ipt" placeholder={placeholder} type={type} />
        </div>
    );
};

export default Input;