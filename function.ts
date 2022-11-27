import { arrayBuffer, buffer } from "stream/consumers";
import { akita_inui, bulldog, exotic, maine_coon, ragdoll, shepherd } from "./Class";
import { bot } from ".";

const TelegramBot = require('node-telegram-bot-api')

export function getRandomInt(r: number) {
  return Math.floor(Math.random() * r);
}

export function fav() {
  var arr = new Array()
  let i = 0
  if(exotic.favorite == true){
    arr[i] = `${exotic.breed}`
    i++;
  }
  if(maine_coon.favorite == true){
    arr[i] = `${maine_coon.breed}`
    i++;
  }
  if(ragdoll.favorite == true){
    arr[i] = `${ragdoll.breed}`
    i++;
  }
  if(akita_inui.favorite == true){
    arr[i] = `${akita_inui.breed}`
    i++;
  }
  if(shepherd.favorite == true){
    arr[i] = `${shepherd.breed}`
    i++;
  }
  if(bulldog.favorite == true){
    arr[i] = `${bulldog.breed}`
    i++;
  }
  return arr
}