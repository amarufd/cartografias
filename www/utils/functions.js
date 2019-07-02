$( document ).ready(function initMap() {
    console.log("hola");

    function loadJSON(callback) {

        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', 'style.json', true);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
    }

    var loaded_json

    loadJSON(function (response) {
        // This correctly prints out the JSON
        loaded_json = JSON.parse(response);
        console.log(loaded_json)

        var casaHuelen = { lat: -33.432453, lng: -70.622048 };

        // The map, centered at Uluru
        var map = new google.maps.Map(
            document.getElementById('map'), {
                zoom: 16,
                mapTypeId: 'terrain',
                center: casaHuelen,
                styles: loaded_json
            });

        function reloadLocaciones(locaciones) {
            for (i = 0; i < locaciones.length; i++) {
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locaciones[i][1], locaciones[i][2]),
                    map: map
                });
            }
        }

        const sleep = (milliseconds) => {
            return new Promise(resolve => setTimeout(resolve, milliseconds))
        }

        var locaciones = [
            ['casaHuelen', -33.432453, -70.622048, 1]
        ]

        reloadLocaciones(locaciones);


        sleep(3000).then(function (params) {
            var locaciones = [
                ['casaHuelen', -33.432453, -70.622048, 1],
                ['casaHuelen2', -33.432113, -70.622441, 2]
            ]
            reloadLocaciones(locaciones);
        })
        
        sleep(6000).then(function (params) {
            var locaciones = [
                ['casaHuelen', -33.432453, -70.622048, 1],
                ['casaHuelen2', -33.432113, -70.622441, 2],
                ['casaHuelen3', -33.432543, -70.623445, 3]
            ]
            reloadLocaciones(locaciones);
        })


    });

    function includeHTML() {
        var z, i, elmnt, file, xhttp;
        /* Loop through a collection of all HTML elements: */
        z = document.getElementsByTagName("*");
        for (i = 0; i < z.length; i++) {
          elmnt = z[i];
          /*search for elements with a certain atrribute:*/
          file = elmnt.getAttribute("navbar");
          if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
              if (this.readyState == 4) {
                if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                /* Remove the attribute, and call this function once more: */
                elmnt.removeAttribute("navbar");
                includeHTML();
              }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
          }
        }
      }

      includeHTML();

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
      document.getElementById("btn6").onclick = function () { 
          CambioImagen(); 
          $('#img19733').show();
          $('#con19733').show();
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