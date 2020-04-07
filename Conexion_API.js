var datos;
function LoadMovie(name) {
//console.log("Supelicula es"+ name.value)
    var detalles ="";
    $.get("https://www.omdbapi.com/?apikey=8c504a5c&s=Doraemon&plot=full", function (rawdatos) {
        var rawstring = JSON.stringify(rawdatos);
        datos = JSON.parse(rawstring);
        console.log(datos);
        for(var i=0; i<datos.Search.length; i++){
            detalles += "<tr>" +
                "<td>" + datos.Search[i].Title + "</td>" +
                "<td>" + datos.Search[i].Year + "</td>" +
                "<td>" + datos.Search[i].imdbID + "</td>" +
                "<td>" + datos.Search[i].Type + "</td>" +
                "<td><img src=" + datos.Search[i].Poster + "></td>" +
                "</tr>";
        }
        document.getElementById("DetallesPeliculas").innerHTML = detalles
    })
}