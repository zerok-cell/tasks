export type dotRequest = "powerstats"|"biography"|"apperance"|"work"|"connections"|"image"

declare interface Superhero {
    id: number;
    typeRequest?:dotRequest
}

export {Superhero}
