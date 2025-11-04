import React, { useEffect, useState } from "react";
import {
  Container,
  VBox,
  BannerHeader,
  BasicSegment,
} from "@ombiel/aek-lib";
import RegisterPost from "../../components/registerPost";
import 
{
  
}from "@ombiel/aek-css";
import "../../client/dpersonales.css";
import { request } from "@ombiel/aek-lib";
<link rel="stylesheet" href="../../client/dpersonales.css" />



export default screen = () => {

  const [lista, setLista] = useState([]);
  const [estado, setEstado] = useState("");
  const [tiempo_final, setFechafin] = useState("tiempo");
  const [exist,setReten] = useState("");
  const [idUser, setidUser] = useState("");
  const stgris = {
    backgroundColor: '#F2F2F2',
    fontFamily: 'Helvetica',
    fontSize: '12px'
  };
  const stverde ={
    backgroundColor: '#151b60',
    fontFamily: 'Helvetica',
    fontSize: '12px'
  };
  const stalerta ={
    backgroundColor: '#779B00',
    fontFamily: 'Helvetica',
    fontSize: '12px',
    color: '#ffffff'
  };
  // var estado = "FASLG"
  //000164011
  //52735954

  //000896511
  useEffect(() => {
    request.action("get-user").end((err, response) => {
      console.log(response.body);
      const { idUniminuto } = response.body.extraAttrs;
      setidUser(idUniminuto);
      console.log("@@@ID", { idUniminuto }, { idUser })
      console.log(err);
    })//setidUser("000746978");
  }, [])


  const llenarLista = async () => {
  

            const myHeaders = new Headers();
            myHeaders.append("apikey", "ITnjVcrLWfYpY2B246EcrWO6Hln3LD7a");
            //console.log("estoy aqui");
            //console.log(idUser);
            const requestOptions = {
              method: "GET",
              headers: myHeaders,
              redirect: "follow"
              };

   //           const url = `https://uniminuto.test.digibee.io/pipeline/uniminuto/v1/servicios-banner/getUserDetails?user=${idUser}`;
  const response = await fetch(`https://uniminuto.api.digibee.io/pipeline/uniminuto/v1/servicios-banner/getUserDetails?user=${idUser}`, requestOptions);
 //console.log(url); 
    const movies = await response.json();
    //console.log(movies);
    const objeto = movies;
   // console.log(objeto);
   // console.log(objeto.photo);

   const myHeaders2 = new Headers();
            //myHeaders2.append("apikey", "5H9CcvkLZJTgPDDCXTXTI7KC90k6prl0");
            //console.log("estoy aqui");
            //console.log(idUser);
            const requestOptions2 = {
              method: "GET",
              headers: myHeaders2,
              redirect: "follow"
              };

 /*           const url = `https://comunidad.uniminuto.edu/api/select/index.php/image/${idUser}`;
//  const response2 = await fetch(`https://comunidad.uniminuto.edu/api/select/index.php/image/${idUser}`, requestOptions2);
const response2 = await fetch(`https://comunidad.uniminuto.edu/api_wallet/modules/fotografia.php?fn=consultar&documento=1019059352&rol=ADMINISTRATIVO`,requestOptions2)
const movies2 = await response2.json();
 // console.log(movies2);
 // console.log(url);

  let mergedObj = {
    ...objeto,
    ...movies2
  };
  
  console.log(mergedObj);
  console.log(mergedObj.fotografia);


  <div className="flex justify-center items-center">
      <div className="w-3/4 p-1 text-black flex justify-center items-center">
        {item.photo ? (
          <img
            src={item.photo}
            alt="Fotografía del estudiante"
            className="h-32 w-32 object-cover"
          />
        ) : (
          <p>No se pudo cargar la imagen</p>
        )}
      </div>
      
    </div>
  */
    if (objeto.UidEstudiante!=''){
    setReten("Con");
    }
    else
    {
      setReten("Sin");
    }
    setLista([objeto]);
    
    
  }


  useEffect(() => {
    if (idUser) {
      llenarLista();
    }
  }, [idUser])



if (exist=="Sin")
{
  return (
    <><link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" /><div className="container mx-auto px-4 py-10 bg-gray p-4" style={stgris}>
    
          
        
          
          <ul className="flex flex-col space-y-4 bg-white rounded-md shadow-md p-4 ">
          <div className="container mx-auto text-white flex justify-center p-2 ">
                  <span className="flex items-center justify-center  rounded-md p-1 text-center" style={stverde}>No hay Información. </span>
                  
                </div> 
          

          </ul>

       </div></>
  )
} else if(exist=="Con")
{
    return (
      <><link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" /><div className="container mx-auto px-4 py-10 bg-gray p-4">
    
    
          
          
          
          <ul className="flex flex-col space-y-4 bg-white rounded-md shadow-md p-4">
          <div className="container mx-auto text-white flex p-2">
                  <span className="flex items-center justify-center  rounded-md p-1 text-center" style={stalerta}>La información que se visualiza a continuación no es considerada una certificación de UNIMINUTO, puede estar sujeta a ajustes y/o modificaciones. </span>
                  
                </div> 
                {lista.map((item) => (
  <div key={item.UidEstudiante} className="container mx-auto bg-blue-30 border border-gray-500 mb-4">
    <div className="container mx-auto bg-blue-30">
    
      <div className="flex p-2">
        <div className="w-1/4 p-1 text-white" style={stverde}>ID Estudiante:</div>
        <div className="w-3/4 p-1 text-black">{item.UidEstudiante}</div>
      </div>
      <div className="flex p-2">
        <div className="w-1/4 p-1 text-white" style={stverde}>Nombre:</div>
        <div className="w-3/4 p-1 text-black">{item.Nombre}</div>
      </div>
      <div className="flex p-2">
        <div className="w-1/4 p-1 text-white" style={stverde}>Apellido:</div>
        <div className="w-3/4 p-1 text-black">{item.Apellido}</div>
      </div>
      <div className="flex p-2">
        <div className="w-1/4 p-1 text-white" style={stverde}>Email:</div>
        <div className="w-3/4 p-1 text-black">{item.Email}</div>
      </div>
      <div className="flex p-2">
        <div className="w-1/4 p-1 text-white" style={stverde}>Email institucional:</div>
        <div className="w-3/4 p-1 text-black">{item.EmailInstitucional}</div>
      </div>
      <div className="flex p-2">
        <div className="w-1/4 p-1 text-white" style={stverde}>Telefono Movil:</div>
        <div className="w-3/4 p-1 text-black">{item.TelefonoMovil}</div>
      </div>
      <div className="flex p-2">
        <div className="w-1/4 p-1 text-white" style={stverde}>Barrio de residencia:</div>
        <div className="w-3/4 p-1 text-black">{item.BarrioResidencia}</div>
      </div>
      <div className="flex p-2">
        <div className="w-1/4 p-1 text-white" style={stverde}>Tipo de dirección:</div>
        <div className="w-3/4 p-1 text-black">{item.TipoDireccion}</div>
      </div>
      <div className="flex p-2">
        <div className="w-1/4 p-1 text-white" style={stverde}>Municipio:</div>
        <div className="w-3/4 p-1 text-black">{item.Municipio}</div>
      </div>
      <div className="flex p-2">
        <div className="w-1/4 p-1 text-white" style={stverde}>Departamento:</div>
        <div className="w-3/4 p-1 text-black">{item.Departamento}</div>
      </div>
      <div className="flex p-2">
        <div className="w-1/4 p-1 text-white" style={stverde}>País:</div>
        <div className="w-3/4 p-1 text-black">{item.Pais}</div>
      </div>
    </div>
  </div>
))}

          </ul>
          

        
    </div></>
  )
}
else
{
  return (
    <Container>
      <VBox>
        <BasicSegment>

        
        </BasicSegment>
      </VBox>
    </Container>
  )
}
}
