import React, { useContext, useEffect } from 'react';
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router-dom';


const PaginaPrivada = () => {
  const navigate = useNavigate ();
  const { store, actions } = useContext(Context);
  useEffect(()=>{
const token = localStorage.getItem("token");
if (! token){
  navigate ("/");
}
  },[navigate])
  return (

    <div>
      <h2>Página Privada</h2>
      <p>Solo puedes ver esto si estás autenticado.</p>
    </div>
  );
};

export default PaginaPrivada;