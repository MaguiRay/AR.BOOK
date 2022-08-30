
/// traigo de local storage lo que guardo

let region=localStorage.getItem("region");
let provincia=localStorage.getItem("provincia");


const hotelesJujuyDisp =[

  new Hotel(001,"Norte Rupestre","Jujuy","Tilcara",3000,"img/hotel01.jpg"),      
  new Hotel(002,"Uwa Wasi hotel","Jujuy","Purmamarca",4500,"img/hotel02.jpg"),
  new Hotel(003,"Luna hotel","Jujuy","Tilcara",4600,"img/hotel03.jpg"),
  new Hotel(004,"Inti hotel","Jujuy","Humahuaca",4600,"img/hotel01.jpg"),
  
  ];
  
const hotelesSaltaDisp =[
  
    new Hotel(005,"Hotel Plaza Cafayate","Salta","Cafayate",3000,"img/hotel01.jpg"),      
    new Hotel(006,"Casa Santa Teresita","Salta","Cachi",4500,"img/hotel02.jpg"),
    new Hotel(007,"Hotel Mirador del Valle","Salta","Ciudad de Salta",4600,"img/hotel03.jpg"),
    new Hotel(010,"Alto del Valle Cafayate","Salta","Cafayate",4600,"img/hotel01.jpg"),
    new Hotel(011, "Cafayate","Salta","Cafayate",2600,"img/hotel03.jpg"),
    
    ];          


    const renderizarHotelesJujuy=()=>{
  
    let listadoHoteles = document.getElementById("listadoHoteles");
    
    hotelesJujuyDisp.forEach((e)=>{
  
        
      let hotelJujuyHtml =` 
        
        <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${e.imagen}" class="img-fluid rounded img-margin-top " alt="hotel01">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${e.nombre}</h5>
              <h6 class="card-title">${e.ciudad}</h6>
              <h6 class="card-title">${e.provincia}</h6>
              <p class="card-text"><small class="text-muted">${'Precio: ' + e.precio + "$ por día por persona."}</small></p>     
              <button onclick="iniciarReserva('${e.nombre}', '${e.provincia}', '${e.ciudad}', '${e.precio}')" type="button" class="btn bg-color-lg-blue  rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal">Resevar</button>
            </div>
          </div>
        </div>
      </div>
        
      `
      listadoHoteles.innerHTML+=hotelJujuyHtml;
      
      
    });
   }

//muestra contenido de los hoteles en Salta
const renderizarHotelesSalta=()=>{

  let listadoHoteles = document.getElementById("listadoHoteles");

  hotelesSaltaDisp.forEach((e)=>{

    let hotelSaltaHtml =` 
        
        <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${e.imagen}" class="img-fluid rounded img-margin-top " alt="hotel01">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${e.nombre}</h5>
              <h6 class="card-title">${e.ciudad}</h6>
              <h6 class="card-title">${e.provincia}</h6>
              <p class="card-text"><small class="text-muted">${'Precio: ' + e.precio + "$ por día por persona."}</small></p>     
              <button onclick="iniciarReserva('${e.nombre}', '${e.provincia}', '${e.ciudad}', '${e.precio}')" type="button" class="btn bg-color-lg-blue  rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal">Resevar</button>
            </div>
          </div>
        </div>
      </div>
        
      `
    listadoHoteles.innerHTML+=hotelSaltaHtml;

  });
 

}


let hotelAReservar = null;
let precioTotal;
let precioEnReserva;



const iniciarReserva =(nombreHotel, provinciaHotel, ciudadHotel, precioHotel)=> {

  hotelAReservar= new Hotel (null, nombreHotel, provinciaHotel, ciudadHotel, precioHotel, null);
 
 
}


/// ve si hay algo en el local storage sino me lo deja vacio

let aux = localStorage.getItem('hotelesReservados');
let reservas= JSON.parse(aux)||[];
 


 /// funcion mostrar en mis reservas los hoteles
 const mostrarHotelesEnReserva=()=>{
  
  let txtReserva = document.getElementById("tituloReservas");
  txtReserva.className ="title-main txt-bold";
  txtReserva.innerHTML="Mis Reservas";

  let hotelesMisReservas = document.getElementById("misReservas");
  reservas.length==0 ? hotelesMisReservas.innerHTML="No tenés ningun hotel en tus reservas" : hotelesMisReservas.innerHTML="";
  reservas.forEach((reserva)=>{

    let precio = parseInt(reserva.cantidadPersonas) * parseInt(reserva.cantidadNoches) * parseInt(reserva.precioNochePersona);
    let hotelReservaHtml =` 
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 txt-color-lb">Hotel</strong>
          <h4 class="mb-0">${reserva.nombreHotel}</h4>
          <div class="mb-1 text-muted">${reserva.ciudadHotel}</div>
          <p class="card-text mb-auto"><h5>${reserva.provinciaHotel}</h5>
          <small class="text-muted">${'Precio por noche: ' + reserva.precioNochePersona} $</small>
          </p>
          <h6 class="mb-0">Noches: ${reserva.cantidadNoches}</h6>
          <h6 class="mb-0">Personas: ${reserva.cantidadPersonas}</h6>
          <h6 class="mb-0">Precio: ${precio}$</h6>
          <button onclick="borrarDeReserva('${reserva.nombreHotel}')" type="button" class="btn btn-outline-info">borrar</button>
        
        </div>
       
      </div>

        
      `
      hotelesMisReservas.innerHTML+=hotelReservaHtml;

    });
}

mostrarHotelesEnReserva();

/////agregar los hoteles a mi reserva

const reservar =(nombre, provincia, ciudad, precio, cantidadNoches, cantidadPersonas)=>{
  let reserva = new Reserva(nombre, provincia, ciudad, precio, cantidadNoches, cantidadPersonas);

  reservas.push(reserva);
  swal({
    title: "Felicidades",
    text: "Agregaste el hotel a tus reservas!",
    icon: "success",
  });

  btnCancelarCalculo.click();
  
  localStorage.setItem('hotelesReservados',JSON.stringify(reservas));

  mostrarHotelesEnReserva();
  
  //acumula los precios de hoteles reservados
  
  let sumaHotelesReservados= 0;
 
  reservas.forEach ((reserva)=>{
    let valorHotel = parseInt(reserva.precioNochePersona) * parseInt(reserva.cantidadNoches) * parseInt(reserva.cantidadPersonas);
    sumaHotelesReservados=sumaHotelesReservados+valorHotel;
  
  });
  
  
};
  

//funcion borrar de mis reservas los hoteles

  const borrarDeReserva = (nombreHotel)=> {

  let i;
 
  for (i=0;i<reservas.length; i++){
 
   if(reservas[i].nombreHotel==nombreHotel)
     break;
  }
   
  swal({
   title: "¿Está seguro que desea borrar el hotel de su reserva?",
   text: "Una vez eliminado no podrá recuperarlo!",
   icon: "warning",
   buttons: true,
   dangerMode: true,
 })
 .then((willDelete) => {
   if (willDelete) {
     
     swal("El hotel se ha removido de sus reservas!", {
       icon: "success",
     });
 
   //si el elemento existe se borra 
     if (reservas.length > 0 && i< reservas.length ) {
 
     reservas.splice(i,1);
     localStorage.setItem('hotelesReservados',JSON.stringify(reservas));
  
     mostrarHotelesEnReserva();
   
    
     }
 
   } else {
     swal("El hotel permanecerá en sus reservas");
   }
 });
 
 }


if (region=="Norte" && provincia=="Jujuy"){


  let numeroHoteles = document.getElementById("tituloCantidadHoteles");
  numeroHoteles.className="title-reserva";
  numeroHoteles.innerHTML="Encontramos " + hotelesJujuyDisp.length + " hoteles disponibles."

const tituloPrincipalNorte=document.getElementById("tituloPrincipalNorte")
tituloPrincipalNorte.innerText="Hoteles en el Norte"
tituloPrincipalNorte.className="txt-bold"

const parrafoPrincipalNorte=document.getElementById("parrafoPrincipalNorte")

const parrafoPrinNor= document.createElement("p")
parrafoPrinNor.innerText="Alojamientos para las zona Norte de la Argentina."
parrafoPrinNor.className="fs-4"
parrafoPrincipalNorte.append(parrafoPrinNor)

renderizarHotelesJujuy();


}
else if(region=="Norte" && provincia=="Salta"){
  let numeroHoteles = document.getElementById("tituloCantidadHoteles");
  numeroHoteles.className="title-reserva";
  numeroHoteles.innerHTML="Encontramos " + hotelesSaltaDisp.length + " hoteles disponibles."

const tituloPrincipalNorte=document.getElementById("tituloPrincipalNorte")
tituloPrincipalNorte.innerText="Hoteles en el Norte"
tituloPrincipalNorte.className="txt-bold"

const parrafoPrincipalNorte=document.getElementById("parrafoPrincipalNorte")

const parrafoPrinNor= document.createElement("p")
parrafoPrinNor.innerText="Alojamientos para las zona Norte de la Argentina."
parrafoPrinNor.className="fs-4"
parrafoPrincipalNorte.append(parrafoPrinNor)


renderizarHotelesSalta();

} 

//operador avanzado AND

region == "Litoral"  && 

swal({
  title: "Lo sentimos!",
  text: "No hay hoteles disponibles en el Litoral!",
  icon: "warning",
  
 
});


region == "Patagonia"  && 

swal({
  title: "Lo sentimos!",
  text: "No hay hoteles disponibles en la Patagonia!",
  icon: "warning",
});


///modal para calcular precio de hotel


let btnCalcularPrecio = document.getElementById("btnCalcular");
let btnCancelarCalculo=document.getElementById("btnCancel");
let txtTotalaPagar = document.getElementById("totalApagar");
let formularioCalcular= document.getElementById ("formularioCalcularReserva");

btnCalcularPrecio.onclick = () => {


  
  let cantPersonas = document.getElementById("cantPersonas").value;
  let cantPersonasFinal = parseInt(cantPersonas);
  let cantDias = document.getElementById("cantDias").value;
  let cantDiasFinal = parseInt(cantDias);
  
  let subTotal = cantDiasFinal*cantPersonasFinal*hotelAReservar.precio;

  let precioTotalBox =` 
  <div class="row d-flex flex-row-reverse img-margin ">
    <div class="col-sm-8">
        <div class="card border-dark text-end">
          <div class="card-header">Total</div>  
              <div class="card-body text-dark">
                <p class="card-text">El total de la reserva es ${subTotal}$ </p>
                <button onclick="reservar('${hotelAReservar.nombre}', '${hotelAReservar.provincia}', '${hotelAReservar.ciudad}', '${hotelAReservar.precio}', '${cantDiasFinal}', '${cantPersonasFinal}')" type="button" class="btn bg-color-lg-blue  rounded-pill"> Confirmar Reserva</button>
                </div>
          </div>
        </div>
    </div>
  </div>
  
  `


  txtTotalaPagar.innerHTML=precioTotalBox;

};

btnCancelarCalculo.onclick =()=> {

  formularioCalcular.reset();
  txtTotalaPagar.innerHTML="";
 
 
 }






