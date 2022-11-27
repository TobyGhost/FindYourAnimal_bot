"use strict";
exports.__esModule = true;
exports.akita_inui = exports.shepherd = exports.bulldog = exports.ragdoll = exports.maine_coon = exports.exotic = exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(animal, breed, country, time_origin, weight, life, cost, favorite) {
        this.animal = animal;
        this.breed = breed;
        this.country = country;
        this.time_origin = time_origin;
        this.weight = weight;
        this.life = life;
        this.cost = cost;
        this.favorite = favorite;
    }
    return Animal;
}());
exports.Animal = Animal;
exports.exotic = new Animal('cat', 'Экзотическая кошка', 'США', '1960-е', '3-6,5 кг', '12-15 лет', '7 000-50 000 рублей', false);
exports.maine_coon = new Animal('cat', 'Мейн-кун', 'США', 'XIX век', '4-7,5 кг', '12-15 лет', '30 000-50 000 рублей', false);
exports.ragdoll = new Animal('cat', 'Рэгдолл', 'США', '1960-е', '4-9 кг', '11-15 лет', '20 000-40 000 рублей', false);
exports.bulldog = new Animal('dog', 'Английский бульдог', 'Великобритания', 'XIIX век', '22-25 кг', '7-10 лет', '23 000-35 000 рублей', false);
exports.shepherd = new Animal('dog', 'Австралийская овчарка (аусси)', 'США', 'XX век', '18-30 кг', '13-15 лет', '60 000-85 000 рублей', false);
exports.akita_inui = new Animal('dog', 'Акита-ину', 'Япония', '1964 год', '23-39 кг', '10-12 лет', '30 000-80 000 рублей', false);
