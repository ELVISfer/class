let playlist=[]

class Pelicula{

    constructor(id, titulo, clasificacion, duracion, actores, pais, genero,idioma, año){
        this.id = id
        this.titulo = titulo
        this.clasificacion = clasificacion
        this.duracion =  duracion
        this.actores =actores
        this.pais = pais
        this.genero = genero
        this.idioma=idioma
        this.año=año

    }
    
    reproducir(Peliculas){
    console.log(`${Peliculas} - Reproduciendo la pelicula ${this.titulo} - ${this.actores}`)
}

}


let pelicula1 = new Pelicula(1, "Terminador", "R", 108, ["Arnold Schwarzenegger", "Linda Hamilton", "Michael Biehn"], ["Estados Unidos, Reino Unido"], "Ciencia ficcion", "ingles", 1984) 
let pelicula2 = new Pelicula(2, "Rocky", "PG", 119, ["Sylvester Stallone, Talia Shire, Burt Young, Carl Weathers, Burgess Meredith"], ["Estados Unidos"], "Deporte y Drama", "ingles", 1976)
let pelicula3 = new Pelicula(3, "El Increible Hulk", "SR", 112, ["Edward Norton, Liv Tyler, Tim Roth, Tim Blake Nelson, Ty Burrell, William Hurt"], ["Estados Unidos"], "Ciencia ficcion Y Cine de superheroes", "ingles y portugues", 2008)
let pelicula4 = new Pelicula(4, "Terminador", "R", 108, ["Arnold Schwarzenegger", "Linda Hamilton", "Michael Biehn"], ["Estados Unidos, Reino Unido"], "Ciencia ficcion", "ingles", 1984)
let pelicula8 = new Pelicula(8, "Nueva pelicula", "R", 115, ["Vengador Fantasma"], ["Estados Unidos"], "Ciencia ficcion y Terror", "ingles y español", 2022)




playlist.push(pelicula1)
playlist.push(pelicula2)
playlist.push(pelicula3)
playlist.push(pelicula4)
playlist.push(pelicula8)

/*
for (let index = 0; index < playlist.length; index++) {
    playlist[index].reproducir()
}
*/

/*
playlist.forEach(function(Pelicula){
    
    pelicula.reproducir()
})
*/

//playlist.forEach((pelicula, NumerodePelicula) => pelicula.reproducir(NumerodePelicula+1))

/playlist.map((pelicula, NumerodePelicula) => pelicula.reproducir(NumerodePelicula+1))



//console.log(playlist)

//const resultadoBusqueda = playlist.filter(pelicula => pelicula.id === 4 )
//const resultadoBusqueda = playlist.filter(pelicula=> pelicula.pais === '' || pelicula.duracion < 500 )
//const resultadoBusqueda = playlist.filter(pelicula=> pelicula.pais === '')
//console.log(resultadoBusqueda)

///Update 

const resultadoBusqueda = playlist.find(Pelicula =>Pelicula.id === 4)
//console.log("actores original", resultadoBusqueda.actores)
resultadoBusqueda.actores = "Varios actores"
//console.log(playlist)


//Delete
playlist = playlist.filter(Pelicula => Pelicula.id !== 4)
console.log(playlist)

const resultadoBusqueda2 = playlist.filter(Pelicula => Pelicula.id === 4 )
console.log(resultadoBusqueda2)


//console.log(playlist)