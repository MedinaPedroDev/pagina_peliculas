// clase pelicula para el instanciamiento de cada pelicula
export default class Pelicula{
    constructor(id,nombre, imagen, descripcion, fecha,año, director, duracion, video){
        this.id=id
        this.nombre=nombre
        this.imagen=imagen
        this.descripcion=descripcion
        this.fecha=fecha
        this.año=año
        this.director=director
        this.duracion=duracion
        this.video=video
    }
}