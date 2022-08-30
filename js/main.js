///menu Principal

class menu { 
    constructor (nombre,link){
    this.nombre= nombre;
    this.link= link;
    }
  
  }  
  
  const mainMenu =[
  
    new menu ("Home","index.html"),
    new menu ("Alojamientos","#"),
    new menu ("FAQs","#"),
    new menu ("Contacto","#"),          
  
    
    ];
 
    const mainMenuPrin = document.getElementById("mainMenuIndex")

    mainMenu.forEach((opcionMenu)=> {
    const aMainMenu = document.createElement("a");
    aMainMenu.setAttribute ("href",opcionMenu.link)
    aMainMenu.innerText=opcionMenu.nombre
    mainMenuPrin.append(aMainMenu)
    aMainMenu.className="nav-link px-2 text-white"
    }
    )



    class Hotel { 
        constructor (id,nombre, provincia, ciudad, precio,imagen){
        this.id=id;
        this.nombre= nombre;
        this.provincia= provincia;
        this.ciudad= ciudad; 
        this.precio= precio;
        this.imagen=imagen;
        }
    }


    class Reserva { 
      constructor (nombreHotel, provinciaHotel, ciudadHotel, precioNochePersona, cantidadNoches, cantidadPersonas){
      this.nombreHotel= nombreHotel;
      this.provinciaHotel= provinciaHotel;
      this.ciudadHotel= ciudadHotel; 
      this.precioNochePersona= precioNochePersona;
      this.cantidadNoches=cantidadNoches;
      this.cantidadPersonas=cantidadPersonas;
      }
  }
      