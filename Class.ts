export class Animal {
    animal: any
    breed: any 
    country: any
    time_origin: any
    weight: any
    life: any
    cost: any
    favorite: boolean

    constructor(animal: any, breed: any, country: any, time_origin: any, weight: any, life: any, cost: any, favorite: boolean){
        this.animal = animal
        this.breed = breed
        this.country = country
        this.time_origin = time_origin
        this.weight = weight
        this.life = life
        this.cost = cost
        this.favorite = favorite
    }
}

export const exotic = new Animal ('cat','Экзотическая кошка', 'США', '1960-е', '3-6,5 кг', '12-15 лет', '7 000-50 000 рублей', false)
export const maine_coon = new Animal ('cat','Мейн-кун', 'США', 'XIX век', '4-7,5 кг', '12-15 лет', '30 000-50 000 рублей', false)
export const ragdoll = new Animal ('cat','Рэгдолл', 'США', '1960-е', '4-9 кг', '11-15 лет', '20 000-40 000 рублей', false)
export let bulldog = new Animal ('dog','Английский бульдог', 'Великобритания', 'XIIX век', '22-25 кг', '7-10 лет', '23 000-35 000 рублей', false)
export const shepherd = new Animal ('dog','Австралийская овчарка (аусси)', 'США', 'XX век', '18-30 кг', '13-15 лет', '60 000-85 000 рублей', false)
export const akita_inui = new Animal ('dog','Акита-ину', 'Япония', '1964 год', '23-39 кг', '10-12 лет', '30 000-80 000 рублей', false)




