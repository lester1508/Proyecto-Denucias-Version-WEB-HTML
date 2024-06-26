/*const expand_btn = document.querySelector(".expand-btn");

let activeIndex;

expand_btn.addEventListener("click", () => {
  //document.body.classList.toggle("collapsed");
  document.getElementById.toggle("collapsed");
});*/


//partede de controlador de l menu lateral izquierdo
const expand_btn = document.querySelector(".expand-btn");
const sidebar = document.querySelector(".sidebar");

expand_btn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});

const current = window.location.href;

const allLinks = document.querySelectorAll(".sidebar-links a");

allLinks.forEach((elem) => {
  elem.addEventListener("click", function () {
    const hrefLinkClick = elem.href;

    allLinks.forEach((link) => {
      if (link.href == hrefLinkClick) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
});

const searchInput = document.querySelector(".search__wrapper input");

searchInput.addEventListener("focus", (e) => {
  document.body.classList.remove("collapsed");
});




//TENGASE CLARO QUE DE AQUI EN ADELANTE CUANDO NOS REFERIMOS o MENCIONAMOS LOS OBJETOS SON a las entidades de:
// Denunciado - Denunciante - Ofendido - Descripcion

//contrlador para pantalla emergente cuando se dectecte un evento onclick sibre nuevo expediente, en le menu despelgable laterla izquierdo

// Obtener los elementos de las ventanas
const ventanaDenuncias = document.querySelector(".VentanaDenuncias");
const ventanaDenunciasDescripcion = document.querySelector(".VentanaDenunciasdescripcion");

// Función para activar la ventana de denuncias y desactivar la de descripción
function activarVentanaDenuncias() {

    ventanaDenuncias.classList.add("active");
    ventanaDenunciasDescripcion.classList.remove("active");
    ventanaDenunciasDescripcion.classList.add("desactive");
}

// Función para activar la ventana de descripción y desactivar la de denuncias
function activarVentanaDenunciasDescripcion() {
  ventanaDenunciasDescripcion.classList.remove("desactive");
    ventanaDenunciasDescripcion.classList.add('active');
    ventanaDenuncias.classList.remove('active');
    
}

// Obtener el botón de linkContainer
const linkContainer = document.querySelector(".tooltip.nuevoexpediente");

// Escuchar eventos click en el botón linkContainer
linkContainer.addEventListener("click", function () {
    // Alternar entre activar y desactivar la ventana de denuncias
    if (ventanaDenuncias.classList.contains('active')) {
        ventanaDenuncias.classList.remove('active');
        ventanaDenunciasDescripcion.classList.remove('active');
        ventanaDenunciasDescripcion.classList.add('desactive');
        
        contador = 0;
    } else {
        activarVentanaDenuncias();
        contador = 1;
    }
});

// Obtener los botones de Denunciante, Denunciado, Ofendido y Descripción
const botonDenunciante = document.querySelector(".contenedorObjetos.denunciante");
const botonDenunciado = document.querySelector(".contenedorObjetos.denunciado");
const botonOfendido = document.querySelector(".contenedorObjetos.ofendido");
const botonDescripcion = document.querySelector(".contenedorObjetos.descripcion");


// Escuchar eventos click en los botones
botonDenunciante.addEventListener("click", function () {
  activarVentanaDenuncias();
});
botonDenunciado.addEventListener("click", function () {
  activarVentanaDenuncias();
});
botonOfendido.addEventListener("click", function () {
  activarVentanaDenuncias();
});
botonDescripcion.addEventListener("click", function () {
  activarVentanaDenunciasDescripcion();
});




/*var botonIniciar = document.querySelector(".nexhtml");
  botonIniciar.addEventListener("click", function() {
    
    if (botonIniciar) {
        botonIniciar.addEventListener("click", function() {
            
            window.location.href = "desplega.htm"; // Cambiar la ubicación a otro.html
        });
    }
});*/


//funcion que permita seleccionar objetos para cambiar disposciones de entradas de datos por medio de la ventana emergente

/*const  seleccionarobj = document.querySelector(".contenedorObjetos");

seleccionarobj.addEventListener("click", function() {

  seleccionarobj.classList.add('active');
  if(seleccionarobj.classList.contains("activo")){
    seleccionarobj.classList.remove("activo");
  }else{
    seleccionarobj.classList.add("activo");
  }


});*/


//intenetar que se cambie los estliso de los tipod de objetos para la denuncia 



const contenedores = document.querySelectorAll(".contenedorObjetos");

contenedores.forEach(contenedor => {
  contenedor.addEventListener("click", function () {
    contenedores.forEach(c => c.classList.remove("active"));
    contenedor.classList.add("active");
  });

});

/*const CapturarSeleccion = document.querySelectorAll('.contenedorObjetos div');

CapturarSeleccion.forEach((elem) => {
  elem.addEventListener("click", function () {
    const defectoObjetoSeleccionado = document.querySelector('.contenedorObjetos.active');

    CapturarSeleccion.forEach((link) => {
      if (link.class == defectoObjetoSeleccionado) {
        link.classList.remove("active");
      } else {
        link.classList.add("active");
      }
    });
  });
});*/



//esto es para dar el fecto de  un cambio de boton cuando se posicione sobre el sin necesidad e dar un click
const CapturarSeleccionarEventosBotones = document.querySelectorAll(".eventosbotones");

CapturarSeleccionarEventosBotones.forEach(boton => {
  boton.addEventListener("mouseenter", function () {

    //a cada elemento con la calse enventosbotones se le elimina el active 
    CapturarSeleccionarEventosBotones.forEach(c => c.classList.remove("active"));
    //si no tiene active se lo agerga
    boton.classList.add("active");

  });

  // Agrega un evento "mouseleave" a cada botón
  boton.addEventListener("mouseleave", function () {
    // Elimina la clase "active" del botón cuando el cursor sale del área del botón
    boton.classList.remove("active");
  });

});






//esto es para poder dar click en guradar y suguiera por medio de otro bonton crear nuevo
const botonGuardar = document.querySelector(".eventosbotones.Guardar");
const botonNuevo = document.querySelector(".eventosbotones.Nuevo");

botonGuardar.addEventListener("click", function () {

  botonGuardar.classList.remove("activoboton");
  botonGuardar.classList.add("desactivoboton");
  botonNuevo.classList.remove("inactivo");
  botonNuevo.classList.add("activar");



});

botonNuevo.addEventListener("click", function () {

  botonNuevo.classList.remove("activar");
  botonNuevo.classList.add("inactivo");
  botonGuardar.classList.remove("desactivoboton");
  botonGuardar.classList.add("activoboton");


});


//con esto cambiaremos el texto orientativo en cada ventana al momneto de cambiar los dde opcion de agregar datos de los objetos involicrados
/*
const textodeOrientacion = document.querySelector(".contenedorObjetos")

textodeOrientacion.addEventListener("click", function () {

  const Denunciante = document.querySelector(".contenedorObjetos.denunciante");
  const Denunciado = document.querySelector(".contenedorObjetos.denunciado");
  const Ofendido = document.querySelector(".contenedorObjetos.ofendido");
  const Descripcion = document.querySelector(".contenedorObjetos.descripcion");
  const texto = document.querySelector(".textOrientativo");
  const texto2 = document.querySelector(".textOrientativo.deunciante");
  const texto3 = document.querySelector(".textOrientativo.denunciado");
  const texto4 = document.querySelector(".textOrientativo.ofendido");
  const texto5 = document.querySelector(".textOrientativo.descripcion");

  if (textodeOrientacion == Denunciante) {

    texto.classList.remove("desactivo");
    texto.classList.add("desactivo");
    texto2.classList.remove("desactivo");

  }
  else if (textodeOrientacion == Denunciado) {
    texto.classList.remove("desactivo");
    texto.classList.add("desactivo");
    texto3.classList.remove("desactivo");
  }
  else if (textodeOrientacion == Ofendido) {
    texto.classList.remove("desactivo");
    texto.classList.add("desactivo");
    texto4.classList.remove("desactivo");

  } else if (textodeOrientacion == Descripcion) {
    texto.classList.remove("desactivo");
    texto.classList.add("desactivo");
    texto5.classList.remove("desactivo");
  }


});
*/



document.querySelector(".texOrientativo.denunciante").classList.remove("desactivo");

contenedores.forEach(contenedor => {
  contenedor.addEventListener("click", function () {
    // Quitamos la clase 'active' de todos los contenedores
    contenedores.forEach(c => c.classList.remove("active"));
    // Agregamos la clase 'active' al contenedor actual
    contenedor.classList.add("active");

    // Ocultamos todos los textos orientativos
    document.querySelectorAll('.texOrientativo').forEach(texto => {
      texto.classList.remove('desactivo');
      texto.classList.add('desactivo');
    });

    // Obtenemos el tipo de contenedor seleccionado
    const tipoContenedor = contenedor.classList[1];
    // Mostramos el texto orientativo correspondiente
    document.querySelector(`.${tipoContenedor}.texOrientativo`).classList.remove('desactivo');
  });
});



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
// Obtener el botón de "Descripción"
const descripcionBtn = document.querySelector(".contenedorObjetos.descripcion");

// Obtener el contenedor de la ventana de denuncias
const ventanaDenuncias = document.querySelector(".VentanaDenuncias");

// Función para actualizar la ventana al hacer clic en "Descripción"
descripcionBtn.addEventListener("click", function() {
  // Ocultar todos los elementos de texto de orientación
  const textosOrientativos = document.querySelectorAll(".texOrientativo");
  textosOrientativos.forEach(texto => {
      texto.classList.add("desactivo");
  });

  // Ocultar todos los elementos de la primera sección de direcciones
  const direccionesAntiguas = document.querySelectorAll(".moldemidel");
  direccionesAntiguas.forEach(direccion => {
      direccion.classList.add("desactivo");
  });

  // Ocultar todos los elementos de texto de descripción
  const textosDescripcion = document.querySelectorAll(".contenderTextoDescripcion");
  textosDescripcion.forEach(texto => {
      texto.classList.add("desactivo");
  });

  // Mostrar el botón "Crear"
  const botonCrear = document.querySelector(".eventosbotones.Crear");
  botonCrear.classList.remove("desactivo");

  // Mostrar el botón "Guardar"
  const botonGuardar = document.querySelector(".eventosbotones.Guardar");
  botonGuardar.classList.remove("desactivoboton");



  ventanaDenuncias.classList.add("active");
});
*/

/*la ventana de registro de datos emergente cambiara si se preciona el boton descripcoin ya que pide datos distintos */

// Obtener los elementos de las ventanas

/*
const ventanaDenuncias = document.querySelector(".VentanaDenuncias");
const ventanaDenunciasDescripcion = document.querySelector(".VentanaDenunciasdescripcion");

// Función para activar la ventana de denuncias y desactivar la de descripción
function activarVentanaDenuncias() {
  ventanaDenuncias.classList.remove('desactive');
  ventanaDenuncias.classList.add('active');
  ventanaDenunciasDescripcion.classList.remove('active');
  ventanaDenunciasDescripcion.classList.remove('desactive');
  ventanaDenunciasDescripcion.classList.add('desactive');
  
}


// Función para activar la ventana de descripción y desactivar la de denuncias
function activarVentanaDenunciasDescripcion() {
  ventanaDenunciasDescripcion.classList.remove('desactive');
  ventanaDenunciasDescripcion.classList.add('active');
  ventanaDenuncias.classList.remove('active');
}

// Obtener los botones de Denunciante, Denunciado, Ofendido y Descripción
const botonDenunciante = document.querySelector(".contenedorObjetos.denunciante");
const botonDenunciado = document.querySelector(".contenedorObjetos.denunciado");
const botonOfendido = document.querySelector(".contenedorObjetos.ofendido");
const botonDescripcion = document.querySelector(".contenedorObjetos.descripcion");

// Escuchar eventos click en los botones
botonDenunciante.addEventListener("click", activarVentanaDenuncias);
botonDenunciado.addEventListener("click", activarVentanaDenuncias);
botonOfendido.addEventListener("click", activarVentanaDenuncias);
botonDescripcion.addEventListener("click", activarVentanaDenunciasDescripcion);

*/