export type dotRequest = "powerstats"|"biography"|"apperance"|"work"|"connections"|"image"


export type Root = Root2[][]

export interface Root2 {
    id: string
    name: string
    effect?: string
    sideEffects?: string
    characteristics?: string
    time?: string
    difficulty: string
    ingredients: Ingredient[]
    inventors: Inventor[]
    manufacturer?: string
}

export interface Ingredient {
    id: string
    name: string
}

export interface Inventor {
    id: string
    firstName?: string
    lastName: string
}

