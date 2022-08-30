

//Parrafo principal
const tituloPrincipal=document.getElementById("tituloPrincipal")
tituloPrincipal.innerText="Encontra tu hotel para visitar la Argentina"
tituloPrincipal.className="txt-bold"


const parrafoPrincipal=document.getElementById("parrafoPrincipal")

const parrafoPrin= document.createElement("p")
parrafoPrin.innerText="Alojamientos para las zonas turisticas de la Argentina en un solo lugar."
parrafoPrin.className="fs-4"
parrafoPrincipal.append(parrafoPrin)

//registro


document.getElementById("registroAlojamiento").onclick = function () {
  location.href = "registro-hotel.html";
};

// buscador principal

const regionesArg = ["Seleccionar","Norte", "Litoral", "Patagonia"];
const provinciasNorte = ["Seleccionar","Jujuy","Salta"];
const provinciasLitoral=["Seleccionar","Corrientes","Entre Rios"];
const provinciasPatagonia=["Seleccionar","Rio Negro", "Tierra del Fuego"];

//seleccion regiones 
const regionSelect = document.getElementById("region");

  regionesArg.forEach((eRegion)=> {
  const optionRegion = document.createElement("option");
  optionRegion.innerText=eRegion;
  optionRegion.value = eRegion;
  regionSelect.append(optionRegion);
  }
)

const provinciaSelect = document.getElementById("provincia")
  regionSelect.addEventListener('change', (evento) => {
    
  const region = evento.target.value;
  
  if (region=="Seleccionar") {
      provinciaSelect.innerHTML="";
  }

  else if (region=="Norte") {
       
      provinciaSelect.innerHTML="";
      provinciasNorte.forEach((eProvinciaNorte)=> {

      const optionProvinciaNorte = document.createElement("option");
      optionProvinciaNorte.innerText=eProvinciaNorte;
      optionProvinciaNorte.value = eProvinciaNorte;
      provinciaSelect.append(optionProvinciaNorte);
      
      } 
      )
  }

  else if (region=="Litoral") {
       
    provinciaSelect.innerHTML="";
    provinciasLitoral.forEach((eProvinciaLitoral)=> {
    const optionProvinciaLitoral = document.createElement("option");
    optionProvinciaLitoral.innerText=eProvinciaLitoral;
    optionProvinciaLitoral.value = eProvinciaLitoral;
    provinciaSelect.append(optionProvinciaLitoral);
   
    } 
    )
}

  else if (region=="Patagonia") {
       
  provinciaSelect.innerHTML="";
  provinciasPatagonia.forEach((eProvinciaPatagonia)=> {
  const optionProvinciaPatagonia = document.createElement("option");
  optionProvinciaPatagonia.innerText=eProvinciaPatagonia;
  optionProvinciaPatagonia.value = eProvinciaPatagonia;
  provinciaSelect.append(optionProvinciaPatagonia);
 
  })
}

  });

  
  const formularioBuscar = document.getElementById("formularioBuscar");
 
  formularioBuscar.onsubmit = ((event)=> {
    event.preventDefault();
    localStorage.setItem('region',regionSelect.value);
    localStorage.setItem('provincia',provinciaSelect.value);
    location.href = "interna.html";
    
    }
  );
 
  
// HOTELES RECOMENDADOS //

//Norte //

const todosLosHotelesNorte = document.getElementById("btnRecomendadosNorte");

todosLosHotelesNorte.onclick =(()=> {

const tituloRecomendNorte = document.getElementById("txtRecomendados");
tituloRecomendNorte.innerHTML="Hoteles Recomendados Norte";
tituloRecomendNorte.className="title-Margin";
 
const mostrarHotelesRecomendados = document.getElementById("recomendados");
mostrarHotelesRecomendados.innerHTML=""

function HotelesRecNorte() {

fetch('./hoteles-norte.json')
  .then((hotelesRecNorte)=> hotelesRecNorte.json() )
  .then((hotelRec)=>{
    hotelRec.forEach((hotel)=>{

      let hotelesRecomendadosHtml =` 
    
      <div class=" card-color card  mb-3">
      <div class="row g-0">
       
        <div class="col-md-8">
          <div class="card-body">
            <img class="img-margin rounded float-start" width="200"  src=` + hotel.imagen + ` />
            <h5 class="card-title">` + hotel.nombre + `</h5>
            <h6 class="card-title">` + hotel.provincia + `</h6>
            <h6 class="card-title">` + hotel.ciudad + `</h6>
            <h6 class="card-title">` + hotel.precio +  `</h6>
            
        
          </div>
        </div>
      </div>
    </div>
    `
  
      mostrarHotelesRecomendados.innerHTML+=hotelesRecomendadosHtml;


    })

  })

}

HotelesRecNorte();



});

//Litoral//  

const todosLosHotelesLitoral = document.getElementById("btnRecomendadosLitoral");


todosLosHotelesLitoral.onclick =(()=> {
  const tituloRecomendLitoral = document.getElementById("txtRecomendados");
  tituloRecomendLitoral.innerHTML="Hoteles Recomendados Litoral";
  tituloRecomendLitoral.className="title-Margin";
  const mostrarHotelesRecomendados = document.getElementById("recomendados");
  mostrarHotelesRecomendados.innerHTML=""

  async function HotelesRecLitoral()
{
  const res1 = await fetch('./hoteles-litoral.json');
  auxArray = await res1.json();


 
  for (let i=0; i<4 ; i++)
  {
 
    let hotelesRecomendadosHtml =` 
    
    <div class=" card-color card  mb-3">
    <div class="row g-0">
     
      <div class="col-md-8">
        <div class="card-body">
          <img src="` + auxArray[i].imagen + `" class="img-margin rounded float-start" width="200" />
          <h5 class="card-title"> ` + auxArray[i].nombre + `</h5>
          <h6 class="card-title">` + auxArray[i].provincia + `</h6>
          <h6 class="card-title">` + auxArray[i].ciudad + `</h6>
          <h6 class="card-title">` + auxArray[i].precio +  `</h6>
          

      
        </div>
      </div>
    </div>
  </div>
  `

    mostrarHotelesRecomendados.innerHTML+=hotelesRecomendadosHtml;
  }
 

}
HotelesRecLitoral();
});

//Patagonia//  

const todosLosHotelesPatagonia = document.getElementById("btnRecomendadosPatagonia");


todosLosHotelesPatagonia.onclick =(()=> {
  const tituloRecomendPatagonia = document.getElementById("txtRecomendados");
  tituloRecomendPatagonia.innerHTML="Hoteles Recomendados Patagonia";
  tituloRecomendPatagonia.className="title-Margin";
  const mostrarHotelesRecomendados = document.getElementById("recomendados");
  mostrarHotelesRecomendados.innerHTML=""

  async function HotelesRecPatagonia()
{
  const res1 = await fetch('./hoteles-patagonia.json');
  auxArray = await res1.json();


 
  for (let i=0; i<4 ; i++)
  {
 
    let hotelesRecomendadosHtml =` 
    
    <div class=" card-color card  mb-3">
    <div class="row g-0">
     
      <div class="col-md-8">
        <div class="card-body">
          <img src="` + auxArray[i].imagen + `" class="img-margin rounded float-start" width="200" />
          <h5 class="card-title"> ` + auxArray[i].nombre + `</h5>
          <h6 class="card-title">` + auxArray[i].provincia + `</h6>
          <h6 class="card-title">` + auxArray[i].ciudad + `</h6>
          <h6 class="card-title">` + auxArray[i].precio +  `</h6>
          

      
        </div>
      </div>
    </div>
  </div>
  `

    mostrarHotelesRecomendados.innerHTML+=hotelesRecomendadosHtml;
  }
 

}
HotelesRecPatagonia();
});
