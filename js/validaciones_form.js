  <script>
        //Curso Básico de Javascript 22.- [Practica] Como validar un formulario sencillo
        //Fuente: https://www.youtube.com/watch?v=VLFBHnkC-vc
        
        (function(){  // Función anónima, https://geekytheory.com/javascript-funciones-anonimas-y-objetos/
            //Variables

            var formulario = document.getElementsByName('formulario')[0],   //[0] Primer elemento, el formulario en si mismo.
                elementos = formulario.elements,                            // Elementos del form, no lo usamos en este script.
                boton = document.getElementById('btn');                     // Elemento id="boton"


            // --------------------------------------------------------
            // Validamos Nombre
            // --------------------------------------------------------            
            var validarNombre = function(e){
                if (formulario.nombre.value == 0){      // Si el campo id="nombre" del form está vacio...
                    alert("Completa el campo nombre");
                    e.preventDefault();                 // Evita elcomportamiento por defecto
                    //https://www.w3schools.com/jsref/event_preventdefault.asp
                    
                }
            };

            // --------------------------------------------------------   
            // Validamos Sexo   
            // --------------------------------------------------------                  
            var validarRadio = function(e){
                if (formulario.sexo[0].checked == true || 
                    formulario.sexo[1].checked == true){
                } else{  //Si al menos uno de los Radio no está marcado....
                    alert("Completa el campo sexo");
                    e.preventDefault();
                }
            };
            
            // --------------------------------------------------------   
            // Validamos Terminos y Condiciones      
            // --------------------------------------------------------              
            var validarCheckbox = function(e){
                if (formulario.terminos.checked == false){
                    alert("Acepta los términos y condiciones");
                    e.preventDefault();
                }
            };

            // --------------------------------------------------------   
            // Se ejecuta al presionar submit e invoca a las tres validaciones   
            // --------------------------------------------------------                  
            var validar = function(e){  // "e" es el evento recibido del form (https://developer.mozilla.org/es/docs/Web/API/Event/preventDefault)
                validarNombre(e);
                validarRadio(e);
                validarCheckbox(e);
            };
            
            // --------------------------------------------------------
            // Espera que se presione "enviar" y llama a "validar"
            // submit es un evento DEL FORM, no del botón!
            formulario.addEventListener("submit", validar);
        }())

    </script>