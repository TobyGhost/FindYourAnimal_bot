"use strict";
exports.__esModule = true;
exports.fav = exports.getRandomInt = void 0;
var Class_1 = require("./Class");
var TelegramBot = require('node-telegram-bot-api');
function getRandomInt(r) {
    return Math.floor(Math.random() * r);
}
exports.getRandomInt = getRandomInt;
function fav() {
    var arr = new Array();
    var i = 0;
    if (Class_1.exotic.favorite == true) {
        arr[i] = "".concat(Class_1.exotic.breed);
        i++;
    }
    if (Class_1.maine_coon.favorite == true) {
        arr[i] = "".concat(Class_1.maine_coon.breed);
        i++;
    }
    if (Class_1.ragdoll.favorite == true) {
        arr[i] = "".concat(Class_1.ragdoll.breed);
        i++;
    }
    if (Class_1.akita_inui.favorite == true) {
        arr[i] = "".concat(Class_1.akita_inui.breed);
        i++;
    }
    if (Class_1.shepherd.favorite == true) {
        arr[i] = "".concat(Class_1.shepherd.breed);
        i++;
    }
    if (Class_1.bulldog.favorite == true) {
        arr[i] = "".concat(Class_1.bulldog.breed);
        i++;
    }
    return arr;
}
exports.fav = fav;
