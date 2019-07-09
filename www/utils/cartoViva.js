$(document).ready(function initMap() {

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
                ['casaHuelen3', -33.432543, -70.623445, 3]
            ]
            reloadLocaciones(locaciones);
        })

        sleep(9000).then(function (params) {
            var locaciones = [
                ['casaHuelen4', -33.433543, -70.624545, 4]
            ]
            reloadLocaciones(locaciones);
        })

        sleep(12000).then(function (params) {
            var locaciones = [
                ['casaHuelen5', -33.434543, -70.625645, 5]
            ]
            reloadLocaciones(locaciones);
        })


        sleep(15000).then(function (params) {
            var locaciones = [
                ['casaHuelen6', -33.435543, -70.626745, 6]
            ]
            reloadLocaciones(locaciones);
        })


    });

});