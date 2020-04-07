var datos;
function LoadMovie() {
    var detalles ="";
    $.get("https://www.omdbapi.com/?apikey=8c504a5c&s=Batman&plot=full", function (rawdatos)  {
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
        document.getElementById("peliculas").innerHTML = detalles
    })
}