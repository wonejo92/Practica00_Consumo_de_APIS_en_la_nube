var datos;
function ShowMovie() {
    fetch("https://www.omdbapi.com/?apikey=8c504a5c&s=spiderman&plot=full")
        .then(res=> res.json())
        .then(data=>{
            console.log(data.Search)
            var detalle = data.Search[1]
            console.log(detalle)
            document.getElementById("peliculas").innerHTML= detalle;

        })
}
