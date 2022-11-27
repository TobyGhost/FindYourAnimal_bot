import { query } from "express"
import { readFileSync } from "fs"
import * as postgres from "ts-postgres"
const TelegramBot = require('node-telegram-bot-api')

import { exotic, ragdoll, maine_coon, akita_inui, shepherd, bulldog} from "./Class"
import { Animal } from "./Class"
import { fav, getRandomInt } from "./function"

const kb = require('./keyboard-buttons')
const keyboard = require('./keyboard.ts')
const fs = require('fs')
const Math = require('mathjs')
const funct = require('./function')

const token: string = '5606481092:AAEvh4BNEd9OW1kkg7jd56tGD_LefSSwmYI'

export const bot = new TelegramBot(token, {
    polling:{
        interval: 300,
        autoStart:true,
        params: {timeout:10}
}})

console.log('бля, опять работа :^(')

bot.on('message', async(msg: { chat: { id: string }; text: any }) => {

    const chatId: string = msg.chat.id

    switch(msg.text) {
        case kb.kb_home.animal:
            bot.sendMessage(chatId, `Выберите животное`, {
                reply_markup: {keyboard: keyboard.animal}
            })
            break
        case kb.kb_home.favorite:
            bot.sendMessage(msg.chat.id, `${fav()}`)
            break
        case kb.kb_animal.cat:
            bot.sendMessage(chatId, `Выберите кошку`, {
                reply_markup: {keyboard: keyboard.cat}
            })
            break
        case kb.kb_animal.dog:
            bot.sendMessage(chatId, `Выберите собаку`, {
                reply_markup: {keyboard: keyboard.dog}
            })
            break
        case kb.go_back:
            bot.sendMessage(chatId, `Выберите животное`, {
                reply_markup: {keyboard: keyboard.home}
            })
            break
        case kb.go_back_animal:
            bot.sendMessage(chatId, `Выберите животное`, {
                reply_markup: {keyboard: keyboard.animal}
            })
            break
        case kb.kb_cat.exotic:
            await bot.sendPhoto(msg.chat.id, fs.readFileSync(__dirname + `/animals/cat/${exotic.breed}/main.jpg`))
            bot.sendMessage(chatId, `Название породы: ${exotic.breed}\nСтрана происхождения: ${exotic.country}\nВремя зарождения породы: ${exotic.time_origin}\nВес: ${exotic.weight}\nПродолжительность жизни: ${exotic.life}\nСтоимость: ${exotic.cost}`, {
                reply_markup: {inline_keyboard: [
                    [
                        {
                            text: 'Информация',
                            url: 'https://ru.wikipedia.org/wiki/%D0%AD%D0%BA%D0%B7%D0%BE%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D0%BA%D0%BE%D1%88%D0%BA%D0%B0'
                        },
                        {
                            text: 'Фото',
                            callback_data: 'exotic_photo'
                        }
                    ],
                    [
                        {
                            text: 'Добовить в избранное',
                            callback_data: 'exotic_favorite'
                        },
                        {
                            text: 'Удалить из избранного',
                            callback_data: 'exotic_not_favorite'
                        }
                    ]
                ],
            }
            })
            break
        case kb.kb_cat.maine_coon:
            await bot.sendPhoto(msg.chat.id, fs.readFileSync(__dirname + `/animals/cat/${maine_coon.breed}/main.jpg`))
            bot.sendMessage(chatId, `Название породы: ${maine_coon.breed}\nСтрана происхождения: ${maine_coon.country}\nВремя зарождения породы: ${maine_coon.time_origin}\nВес: ${maine_coon.weight}\nПродолжительность жизни: ${maine_coon.life}\nСтоимость: ${maine_coon.cost}`, {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Информация',
                                url: 'https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%B9%D0%BD-%D0%BA%D1%83%D0%BD'
                            },
                            {
                                text: 'Фото',
                                callback_data: 'maine_coon_photo'
                            }
                        ],
                        [
                            {
                                text: 'Добовить в избранное',
                                callback_data: 'maine_coon_favorite'
                            },
                            {
                                text: 'Удалить из избранного',
                                callback_data: 'maine_coon_not_favorite'
                            }
                        ]
                    ]
                }
            })
            break
        case kb.kb_cat.ragdoll:
            await bot.sendPhoto(msg.chat.id, fs.readFileSync(__dirname + `/animals/cat/${ragdoll.breed}/main.jpg`))
            bot.sendMessage(chatId, `Название породы: ${ragdoll.breed}\nСтрана происхождения: ${ragdoll.country}\nВремя зарождения породы: ${ragdoll.time_origin}\nВес: ${ragdoll.weight}\nПродолжительность жизни: ${ragdoll.life}\nСтоимость: ${ragdoll.cost}`, {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Информация',
                                url: 'https://ru.wikipedia.org/wiki/%D0%A0%D1%8D%D0%B3%D0%B4%D0%BE%D0%BB%D0%BB'
                            },
                            {
                                text: 'Фото',
                                callback_data: 'ragdoll_photo'
                            }
                        ],
                        [
                            {
                                text: 'Добовить в избранное',
                                callback_data: 'ragdoll_favorite'
                            },
                            {
                                text: 'Удалить из избранного',
                                callback_data: 'ragdoll_not_favorite'
                            }
                        ]
                    ]
                }
            })
            break
        case kb.kb_dog.akita_inui:
            await bot.sendPhoto(msg.chat.id, fs.readFileSync(__dirname + `/animals/dog/${akita_inui.breed}/main.jpg`))
            bot.sendMessage(chatId, `Название породы: ${akita_inui.breed}\nСтрана происхождения: ${akita_inui.country}\nВремя зарождения породы: ${akita_inui.time_origin}\nВес: ${akita_inui.weight}\nПродолжительность жизни: ${akita_inui.life}\nСтоимость: ${akita_inui.cost}`, {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Информация',
                                url: 'https://ru.wikipedia.org/wiki/%D0%90%D0%BA%D0%B8%D1%82%D0%B0-%D0%B8%D0%BD%D1%83'
                            },
                            {
                                text: 'Фото',
                                callback_data: 'akita_inui_photo'
                            }
                        ],
                        [
                            {
                                text: 'Добовить в избранное',
                                callback_data: 'akita_inui_favorite'
                            },
                            {
                                text: 'Удалить из избранного',
                                callback_data: 'akita_inui_not_favorite'
                            }
                        ]
                    ]
                }
            })
            break
        case kb.kb_dog.shepherd:
            await bot.sendPhoto(msg.chat.id, fs.readFileSync(__dirname + `/animals/dog/${shepherd.breed}/main.jpg`))
            bot.sendMessage(chatId, `Название породы: ${shepherd.breed}\nСтрана происхождения: ${shepherd.country}\nВремя зарождения породы: ${shepherd.time_origin}\nВес: ${shepherd.weight}\nПродолжительность жизни: ${shepherd.life}\nСтоимость: ${shepherd.cost}`, {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Информация',
                                url: 'https://ru.wikipedia.org/wiki/%D0%90%D0%B2%D1%81%D1%82%D1%80%D0%B0%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B2%D1%87%D0%B0%D1%80%D0%BA%D0%B0'
                            },
                            {
                                text: 'Фото',
                                callback_data: 'shepherd_photo'
                            }
                        ],
                        [
                            {
                                text: 'Добовить в избранное',
                                callback_data: 'shepherd_favorite'
                            },
                            {
                                text: 'Удалить из избранного',
                                callback_data: 'shepherd_not_favorite'
                            }
                        ]
                    ]
                }
            })
            break
        case kb.kb_dog.bulldog:
            await bot.sendPhoto(msg.chat.id, fs.readFileSync(__dirname + `/animals/dog/${bulldog.breed}/main.jpg`))
            bot.sendMessage(chatId, `Название породы: ${bulldog.breed}\nСтрана происхождения: ${bulldog.country}\nВремя зарождения породы: ${bulldog.time_origin}\nВес: ${bulldog.weight}\nПродолжительность жизни: ${bulldog.life}\nСтоимость: ${bulldog.cost}`, {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Информация',
                                url: 'https://ru.wikipedia.org/wiki/%D0%90%D0%BD%D0%B3%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9_%D0%B1%D1%83%D0%BB%D1%8C%D0%B4%D0%BE%D0%B3'
                            },
                            {
                                text: 'Фото',
                                callback_data: 'bulldog_photo'
                            }
                        ],
                        [
                            {
                                text: 'Добавить в избранное',
                                callback_data: 'bulldog_favorite'
                            },
                            {
                                text: 'Удалить из избранного',
                                callback_data: 'bulldog_not_favorite'
                            }
                        ]
                    ]
                }
            })
            break
    }

})

bot.on('callback_query', async (query: { data: any; message: { chat: { id: any } } }) => {

    const random: number = getRandomInt(6)

    function favorite(fav: boolean) {
        if(fav == true) {
            bot.sendMessage(query.message.chat.id, "Уже в избранном")
            return fav
        }
        else {
            fav = true
            bot.sendMessage(query.message.chat.id, 'Добавленно в избранное')
            return fav
        }
    }

    function not_favorite(fav: boolean) {
        if(fav == true) {
            fav = false
            bot.sendMessage(query.message.chat.id, "Удаленно из избранного")
            return fav
        }
        else {
            bot.sendMessage(query.message.chat.id, 'Данной породы нет в избранном')
            return fav
        }

    }

    switch(query.data) {
        case 'exotic_photo':
            await bot.sendPhoto(query.message.chat.id, fs.readFileSync(__dirname + `/animals/cat/${exotic.breed}/${random}.jpg`))
            break
        case 'maine_coon_photo':
            await bot.sendPhoto(query.message.chat.id, fs.readFileSync(__dirname + `/animals/cat/${maine_coon.breed}/${random}.jpg`))
            break
        case 'ragdoll_photo':
            await bot.sendPhoto(query.message.chat.id, fs.readFileSync(__dirname + `/animals/cat/${ragdoll.breed}/${random}.jpg`))
            break
        case 'akita_inui_photo':
            await bot.sendPhoto(query.message.chat.id, fs.readFileSync(__dirname + `/animals/dog/${akita_inui.breed}/${random}.jpg`))
            break
        case 'shepherd_photo':
            await bot.sendPhoto(query.message.chat.id, fs.readFileSync(__dirname + `/animals/dog/${shepherd.breed}/${random}.jpg`))
            break
        case 'bulldog_photo':
            await bot.sendPhoto(query.message.chat.id, fs.readFileSync(__dirname + `/animals/dog/${bulldog.breed}/${random}.jpg`))
            break
        case 'exotic_favorite':
            exotic.favorite = favorite(exotic.favorite)
            break
        case 'exotic_not_favorite':
            exotic.favorite = not_favorite(exotic.favorite)
            break
        case 'maine_coon_favorite':
            maine_coon.favorite = favorite(maine_coon.favorite)
            break
        case 'maine_coon_not_favorite':
            maine_coon.favorite = not_favorite(maine_coon.favorite)
            break     
        case 'ragdoll_favorite':
            ragdoll.favorite = favorite(ragdoll.favorite)
            break
        case 'ragdoll_not_favorite':
            ragdoll.favorite = not_favorite(ragdoll.favorite)
            break
        case 'akita_inui_favorite':
            akita_inui.favorite = favorite(akita_inui.favorite)
            break
        case 'akita_inui_not_favorite':
            akita_inui.favorite = not_favorite(akita_inui.favorite)
            break   
        case 'shepherd_favorite':
            shepherd.favorite = favorite(shepherd.favorite)
            break
        case 'shepherd_not_favorite':
            shepherd.favorite = not_favorite(shepherd.favorite)
            break     
        case 'bulldog_favorite':
            bulldog.favorite = favorite(bulldog.favorite)
            break
        case 'bulldog_not_favorite':
            bulldog.favorite = not_favorite(bulldog.favorite)
            break
            
    }  
})

bot.onText(/\/start/, (msg: { from: { first_name: any }; chat: { id: any } }) => {

    const text: string = `Привет, ${msg.from.first_name}`

    bot.sendMessage(msg.chat.id, text, {
        reply_markup: {
            keyboard: keyboard.home
        }
    })
})


