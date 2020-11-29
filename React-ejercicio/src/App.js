import React,{useEffect,useState} from 'react';
import './App.css';
import useForm from './hook/useForm';
import axios from 'axios';

function App() {
  // Mala practica
  // const [nombre,setNombre] = useState('')
  // const [apellidos,setApellidos] = useState('')
  // const [email,setEmail] = useState('')
  // const [password,setPassword] = useState('')
  // const [genero,setGenero] = useState('')
  // const [edad,setEdad] = useState('')

  const [datos, setDatos] = useState({})
  const [test, setTest] = useState("")
  const [empleados, setEmpleados] = useState({})


  useEffect(() =>{
    //Simulando la llamda  a la API


    axios
      .get("http://d98d95a964fc.ngrok.io/employees/")
      .then((result) => {
        console.log(result.data);
        setEmpleados(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const sendData = (data) =>{
    //Aca mandamos la info a la API
    console.log("Esta es mi data final ---->", data)
  }

  const {inputs,handleInputChange, handleSubmit} = useForm(sendData,datos);

  return (
    <div className="App">
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={(event) => setTest(event.target.value)} value={test}/>
        <input 
          type="text" 
          name="nombre"  
          onChange={handleInputChange}
          value={inputs.nombre}
          placeholder="tu nombre"/>
        <input type="text" name="apellidos" 
          onChange={handleInputChange}
          value={inputs.apellidos}
        placeholder="tus apellidos"/>
        <input 
          type="email" 
          name="email" 
          placeholder="tu email"
          onChange={handleInputChange}
          value={inputs.email}
          />
        <input 
          type="password" 
          name="password" 
          onChange={handleInputChange}
          value={inputs.password}
          placeholder="tu password"
        />
        <select name="genero" 
          onChange={handleInputChange}
          value={inputs.genero}
        >
          <option value="">Elige un genero</option>
          <option value="M">Mujer</option>
          <option value="H">Hombre</option>
        </select>
        <input 
          type="number" 
          name="edad" 
          onChange={handleInputChange}
          value={inputs.edad}
          placeholder="tu edad"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
