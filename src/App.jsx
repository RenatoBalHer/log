import { useEffect, useState } from 'react'
import './App.css'
import Input from './Components/Input'
import Button from './Components/Button'


function App() {
  const [showPassword, setShowPassword] = useState(false)
  const [userLogged, setUserLogged] = useState(false)
  const [data, setData] = useState({user:"", password:""})
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault()
    setError(false)
    const delay = Math.random() * (4000 - 2000) + 2000;
      
      
      const myPromise = () => {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (data.password === "password1234") {
            resolve();
          }else{
            reject()
          }
        }, delay);
      });
      
      }
      myPromise()
      .then(()=>{
        alert("Login Exitoso bienvenido "+ data.user)
        window.localStorage.setItem("user", data.user)
        setLoading(false)})
      .catch((err)=>{
        setLoading(false)
        setError(true)})
  }

  useEffect(() => {
    const user = window.localStorage.getItem("user")
    if (user && user !== "") {
      setUserLogged(user)
    }
  }, [])
  

  return (
    <div className='main'>
      <form onSubmit={(e) => {handleSubmit(e)}} className='form' action="">
        <h1>Login</h1>
        {error && (<p className='error'>Contraseña incorrecta</p>)}
        {userLogged && (<p>Bienvenido: {userLogged} </p>)}
        <Input
        label={"Usuario"}
        name={"user"}
        type={"text"}
        placeholder={"Ingresa tu usuario"}
        data={data}
        setData={setData}
        />
        <Input
        label={"Contraseña"}
        name={"password"}
        type={showPassword?"text":"password"}
        placeholder={"Ingresa tu contraseña"}
        data={data}
        setData={setData} 
        />
        <div className='check'>
        <p>Mostrar contraseña</p>
        <input type="checkbox" onChange={()=>{setShowPassword(!showPassword)}} />
        </div>
        {
          loading && (<p>Cargando...</p>)
        }
        <Button
        text={"Ingresar"}
        disabled={data?.password?.length < 6 }/>
      </form>
    </div>
  )
}

export default App
