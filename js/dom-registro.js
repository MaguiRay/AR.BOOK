
let formularioRegistro;
let inputNombreHotel;
let inputCiudadHotel;
let inputProvincia;
let inputPrecio;


const tituloPrincipalRegistro=document.getElementById("tituloRegistro");
tituloPrincipalRegistro.innerText="Registra tu hotel en AR.book"
tituloPrincipalRegistro.className="txt-bold"


class Hotel { 
    constructor (nombre, provincia, ciudad, precio,imagen){
    this.nombre= nombre;
    this.provincia= provincia;
    this.ciudad= ciudad; 
    this.precio= precio;
    this.imagen=imagen;
    }
  
}   


const hotelesJujuyDisp =[];
function iniciarFormularioRegistro() {
formularioRegistro = document.getElementById("formularioRegistroHotel");
inputNombreHotel = document.getElementById("nombreHotel");
inputCiudadHotel = document.getElementById("ciudad");
inputProvincia = document.getElementById("provincia");
inputPrecio=document.getElementById("precioHotel");
}

iniciarFormularioRegistro();

formularioRegistro.onsubmit = (event)=> {
event.preventDefault();
    let hotelNuevo = new Hotel(inputNombreHotel.value, inputProvincia.value,inputCiudadHotel.value, inputPrecio.value);
        hotelesJujuyDisp.push(hotelNuevo);
        formularioRegistro.reset();
        hotelesJujuyDisp.reverse()
        limpiarHoteles();
        agregarHotelesTabla();    
}

function limpiarHoteles(){
    while(tablaHoteles.rows.length > 1){
        tablaHoteles.deleteRow(1)
    }
}

function agregarHotelesTabla(){
   
      
    hotelesJujuyDisp.forEach(hotel => {
        let tablaHoteles = document.querySelector(".bodytablaHoteles")
        let filaTablaHoteles = document.createElement("tr")

        filaTablaHoteles.innerHTML = `
        <td>${hotel.nombre} </td>
        <td>${hotel.provincia} </td>
        <td>${hotel.ciudad} </td>
        <td>${hotel.precio} </td>
        `

        tablaHoteles.append(filaTablaHoteles)
        Toastify({
            text: "Tu hotel ha sido registrado con éxito",
            duration: 3000,
            gravity:"bottom",
            offset: {
              x: 50, 
              y: 100 
            },
            style: {
                background: "linear-gradient(to right, #142D4C, #83C9C2 )",
              }
          }).showToast();

    });

   
  

}

