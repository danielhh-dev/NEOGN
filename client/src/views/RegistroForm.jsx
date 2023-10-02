import axios from "axios";
import React, { useState } from "react";

const RegistroForm = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContrasena] = useState("");
  const [errores, setErrores] = useState({});
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación del formulario...
    const error = {};
    if (!nombre || !/^[A-Za-z]+$/.test(nombre)) {
      error.nombre = "Este campo es obligatorio y solo debe contener letras";
    }
    if (!apellido || !/^[A-Za-z]+$/.test(apellido)) {
      error.apellido = "Este campo es obligatorio y solo debe contener letras";
    }
    if (!telefono || !/^\d+$/.test(telefono)) {
      error.telefono = "Este campo es obligatorio y solo debe contener números";
    }

    if (!email) {
      error.email = "Este campo es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error.email = "Dirección de correo electrónico inválida";
    }

    if (!contraseña) {
      error.contraseña = "Este campo es obligatorio";
    } else if (contraseña.length < 8) {
      error.contraseña = "La contraseña debe tener al menos 8 caracteres";
    }

    if (Object.keys(error).length === 0) {
      try {
        await axios.post("/api/register", {
          nombre,
          apellido,
          telefono,
          email,
          contraseña,
        });
        
        // Mostrar una alerta o realizar acciones adicionales si es necesario
        alert("Usuario registrado correctamente");

        // Restablecer los campos del formulario y errores
        setNombre("");
        setApellido("");
        setTelefono("");
        setEmail("");
        setContrasena("");
        setErrores({});
        setMostrarAlerta(true);
      } catch (error) {
        console.error(error);
        // Manejar errores de la solicitud (mostrar mensajes de error, etc.)
      }
    } else {
      // Si hay errores, establecer el estado de errores para mostrar mensajes de error
      setErrores(error);
    }
  };


        return (
      <div className="container mx-auto p-8 max-w-xl bg-gray-100 rounded shadow-lg">
        <h2 className="text-3xl font-bold mb-6">Registrate </h2>
        <form onSubmit={handleSubmit}className="space-y-6">
        <div>
            <label className="block text-sm font-medium text-gray-600" >Nombre</label>

            <input type="text"  value={nombre} onChange={(e) => setNombre(e.target.value)}  className="mt-1 p-3 w-full border rounded" 
              placeholder="Ingresa tu nombre"
               />
            {errores.nombre && <span className="error">{errores.nombre}</span>}
        </div>
        <div/>

        <label className="block text-sm font-medium text-gray-600">Apellido</label>
            <input type="text"  value={apellido} onChange={(e) => setApellido(e.target.value)} className="mt-1 p-3 w-full border rounded" placeholder="Ingresa tu apellido" />
            {errores.nombre && <span className="text-red-500 text-sm">{errores.apellido}</span>}
            <div>
                <label className="block text-sm font-medium text-gray-600">Telefono</label>
                <input type="text" value={telefono} onChange={(e) => setTelefono (e.target.value)} className="mt-1 p-3 w-full border rounded"  placeholder="Ingresa tu telefono"/>
                { errores.telefono && <span className="error">{errores.telefono}</span>}
            </div>
            
            <div>
               <label className="block text-sm font-medium text-gray-600">E-Mail</label>
               <input  type="email" value={email} onChange={(e) => setEmail (e.target.value)} className="mt-1 p-3 w-full border rounded" placeholder="Ingresa tu email"/> 
               {errores.email && <span className="error">{errores.email}</span>}
            </div>
            <div>
                <label  className="block text-sm font-medium text-gray-600">Contraseña</label>
                <input  type="password" value={contraseña} onChange={(e) => setContrasena (e.target.value)}className="mt-1 p-3 w-full border rounded" placeholder="Ingresa tu contraseña"/>
                {errores.contrasena && <span className="error">{errores.contrasena} </span>}
            </div>
            <button type="submit" className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
          Crear Cuenta
        </button>
        
        </form>
        <div className="mt-4 text-center">
        ¿Ya tenés una cuenta? <a href="/login" className="text-blue-500">Ingresá</a>
      </div>
</div>
 

 );
};

export default RegistroForm;