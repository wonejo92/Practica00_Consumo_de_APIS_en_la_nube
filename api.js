function BuscarPelicula() {
var titulo = document.getElementById("titulo").value;
var detalles="";
if (titulo ==""){
    alert("Rellene los Campos.")
}else {
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }else {
        xmlhttp =new ActiveXObject("Microsoft.XMLHTTP");
    }

        xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200){
            var data = JSON.parse(this.responseText)
            console.log(data)
            data.Search.forEach(movie =>{
                detalles += "<tr>" +
                    "<td>"+ movie.Title + "</td>" +
                    "<td>"+ movie.Year + "</td>" +
                    "<td>"+ movie.imdbID + "</td>" +
                    "<td>"+ movie.Type + "</td>" +
                    "<td><img src="+ movie.Poster + " style='width:150px;height:100px;'></td>" +
                    "</tr>"
            });
            document.getElementById("DetallesPeliculas").innerHTML = detalles;
        }
        }
    xmlhttp.open("GET","https://www.omdbapi.com/?apikey=8c504a5c&s=" + titulo +"&plot=full", true);
    xmlhttp.send();
}

}