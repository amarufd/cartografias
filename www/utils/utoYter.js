$( document ).ready(function initMap() {

      document.getElementById("btn1").onclick = function () { 
          CambioImagen();
          $('#img1957').show();
          $('#con1957').show();
        };
      document.getElementById("btn2").onclick = function () { 
          CambioImagen(); 
          $('#img1960').show();
          $('#con1960').show();
        };
      document.getElementById("btn3").onclick = function () { 
          CambioImagen(); 
          $('#img1970').show();
          $('#con1970').show();
        };
      document.getElementById("btn4").onclick = function () { 
          CambioImagen(); 
          $('#img19731').show();
          $('#con19731').show();
        };
      document.getElementById("btn5").onclick = function () { 
          CambioImagen(); 
          $('#img19732').show();
          $('#con19732').show();
        };
      document.getElementById("btn7").onclick = function () { 
          CambioImagen(); 
          $('#img197376').show();
          $('#con197376').show();
        };
      document.getElementById("btn8").onclick = function () { 
          CambioImagen(); 
          $('#img197681').show();
          $('#con197681').show();
        };

      function CambioImagen(){
        $('.disnon').hide();
      }

      CambioImagen();
      $('#img1957').show();
      $('#con1957').show();

    });