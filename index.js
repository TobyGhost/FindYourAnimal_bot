"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.bot = void 0;
var TelegramBot = require('node-telegram-bot-api');
var Class_1 = require("./Class");
var function_1 = require("./function");
var kb = require('./keyboard-buttons');
var keyboard = require('./keyboard.ts');
var fs = require('fs');
var Math = require('mathjs');
var funct = require('./function');
var token = '5606481092:AAEvh4BNEd9OW1kkg7jd56tGD_LefSSwmYI';
exports.bot = new TelegramBot(token, {
    polling: {
        interval: 300,
        autoStart: true,
        params: { timeout: 10 }
    }
});
console.log('бля, опять работа :^(');
exports.bot.on('message', function (msg) { return __awaiter(void 0, void 0, void 0, function () {
    var chatId, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                chatId = msg.chat.id;
                _a = msg.text;
                switch (_a) {
                    case kb.kb_home.animal: return [3 /*break*/, 1];
                    case kb.kb_home.favorite: return [3 /*break*/, 2];
                    case kb.kb_animal.cat: return [3 /*break*/, 3];
                    case kb.kb_animal.dog: return [3 /*break*/, 4];
                    case kb.go_back: return [3 /*break*/, 5];
                    case kb.go_back_animal: return [3 /*break*/, 6];
                    case kb.kb_cat.exotic: return [3 /*break*/, 7];
                    case kb.kb_cat.maine_coon: return [3 /*break*/, 9];
                    case kb.kb_cat.ragdoll: return [3 /*break*/, 11];
                    case kb.kb_dog.akita_inui: return [3 /*break*/, 13];
                    case kb.kb_dog.shepherd: return [3 /*break*/, 15];
                    case kb.kb_dog.bulldog: return [3 /*break*/, 17];
                }
                return [3 /*break*/, 19];
            case 1:
                exports.bot.sendMessage(chatId, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435", {
                    reply_markup: { keyboard: keyboard.animal }
                });
                return [3 /*break*/, 19];
            case 2:
                exports.bot.sendMessage(msg.chat.id, "".concat((0, function_1.fav)()));
                return [3 /*break*/, 19];
            case 3:
                exports.bot.sendMessage(chatId, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u043E\u0448\u043A\u0443", {
                    reply_markup: { keyboard: keyboard.cat }
                });
                return [3 /*break*/, 19];
            case 4:
                exports.bot.sendMessage(chatId, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043E\u0431\u0430\u043A\u0443", {
                    reply_markup: { keyboard: keyboard.dog }
                });
                return [3 /*break*/, 19];
            case 5:
                exports.bot.sendMessage(chatId, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435", {
                    reply_markup: { keyboard: keyboard.home }
                });
                return [3 /*break*/, 19];
            case 6:
                exports.bot.sendMessage(chatId, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435", {
                    reply_markup: { keyboard: keyboard.animal }
                });
                return [3 /*break*/, 19];
            case 7: return [4 /*yield*/, exports.bot.sendPhoto(msg.chat.id, fs.readFileSync(__dirname + "/animals/cat/".concat(Class_1.exotic.breed, "/main.jpg")))];
            case 8:
                _b.sent();
                exports.bot.sendMessage(chatId, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0440\u043E\u0434\u044B: ".concat(Class_1.exotic.breed, "\n\u0421\u0442\u0440\u0430\u043D\u0430 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F: ").concat(Class_1.exotic.country, "\n\u0412\u0440\u0435\u043C\u044F \u0437\u0430\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u043F\u043E\u0440\u043E\u0434\u044B: ").concat(Class_1.exotic.time_origin, "\n\u0412\u0435\u0441: ").concat(Class_1.exotic.weight, "\n\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0436\u0438\u0437\u043D\u0438: ").concat(Class_1.exotic.life, "\n\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: ").concat(Class_1.exotic.cost), {
                    reply_markup: { inline_keyboard: [
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
                        ]
                    }
                });
                return [3 /*break*/, 19];
            case 9: return [4 /*yield*/, exports.bot.sendPhoto(msg.chat.id, fs.readFileSync(__dirname + "/animals/cat/".concat(Class_1.maine_coon.breed, "/main.jpg")))];
            case 10:
                _b.sent();
                exports.bot.sendMessage(chatId, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0440\u043E\u0434\u044B: ".concat(Class_1.maine_coon.breed, "\n\u0421\u0442\u0440\u0430\u043D\u0430 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F: ").concat(Class_1.maine_coon.country, "\n\u0412\u0440\u0435\u043C\u044F \u0437\u0430\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u043F\u043E\u0440\u043E\u0434\u044B: ").concat(Class_1.maine_coon.time_origin, "\n\u0412\u0435\u0441: ").concat(Class_1.maine_coon.weight, "\n\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0436\u0438\u0437\u043D\u0438: ").concat(Class_1.maine_coon.life, "\n\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: ").concat(Class_1.maine_coon.cost), {
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
                });
                return [3 /*break*/, 19];
            case 11: return [4 /*yield*/, exports.bot.sendPhoto(msg.chat.id, fs.readFileSync(__dirname + "/animals/cat/".concat(Class_1.ragdoll.breed, "/main.jpg")))];
            case 12:
                _b.sent();
                exports.bot.sendMessage(chatId, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0440\u043E\u0434\u044B: ".concat(Class_1.ragdoll.breed, "\n\u0421\u0442\u0440\u0430\u043D\u0430 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F: ").concat(Class_1.ragdoll.country, "\n\u0412\u0440\u0435\u043C\u044F \u0437\u0430\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u043F\u043E\u0440\u043E\u0434\u044B: ").concat(Class_1.ragdoll.time_origin, "\n\u0412\u0435\u0441: ").concat(Class_1.ragdoll.weight, "\n\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0436\u0438\u0437\u043D\u0438: ").concat(Class_1.ragdoll.life, "\n\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: ").concat(Class_1.ragdoll.cost), {
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
                });
                return [3 /*break*/, 19];
            case 13: return [4 /*yield*/, exports.bot.sendPhoto(msg.chat.id, fs.readFileSync(__dirname + "/animals/dog/".concat(Class_1.akita_inui.breed, "/main.jpg")))];
            case 14:
                _b.sent();
                exports.bot.sendMessage(chatId, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0440\u043E\u0434\u044B: ".concat(Class_1.akita_inui.breed, "\n\u0421\u0442\u0440\u0430\u043D\u0430 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F: ").concat(Class_1.akita_inui.country, "\n\u0412\u0440\u0435\u043C\u044F \u0437\u0430\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u043F\u043E\u0440\u043E\u0434\u044B: ").concat(Class_1.akita_inui.time_origin, "\n\u0412\u0435\u0441: ").concat(Class_1.akita_inui.weight, "\n\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0436\u0438\u0437\u043D\u0438: ").concat(Class_1.akita_inui.life, "\n\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: ").concat(Class_1.akita_inui.cost), {
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
                });
                return [3 /*break*/, 19];
            case 15: return [4 /*yield*/, exports.bot.sendPhoto(msg.chat.id, fs.readFileSync(__dirname + "/animals/dog/".concat(Class_1.shepherd.breed, "/main.jpg")))];
            case 16:
                _b.sent();
                exports.bot.sendMessage(chatId, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0440\u043E\u0434\u044B: ".concat(Class_1.shepherd.breed, "\n\u0421\u0442\u0440\u0430\u043D\u0430 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F: ").concat(Class_1.shepherd.country, "\n\u0412\u0440\u0435\u043C\u044F \u0437\u0430\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u043F\u043E\u0440\u043E\u0434\u044B: ").concat(Class_1.shepherd.time_origin, "\n\u0412\u0435\u0441: ").concat(Class_1.shepherd.weight, "\n\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0436\u0438\u0437\u043D\u0438: ").concat(Class_1.shepherd.life, "\n\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: ").concat(Class_1.shepherd.cost), {
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
                });
                return [3 /*break*/, 19];
            case 17: return [4 /*yield*/, exports.bot.sendPhoto(msg.chat.id, fs.readFileSync(__dirname + "/animals/dog/".concat(Class_1.bulldog.breed, "/main.jpg")))];
            case 18:
                _b.sent();
                exports.bot.sendMessage(chatId, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0440\u043E\u0434\u044B: ".concat(Class_1.bulldog.breed, "\n\u0421\u0442\u0440\u0430\u043D\u0430 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F: ").concat(Class_1.bulldog.country, "\n\u0412\u0440\u0435\u043C\u044F \u0437\u0430\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u043F\u043E\u0440\u043E\u0434\u044B: ").concat(Class_1.bulldog.time_origin, "\n\u0412\u0435\u0441: ").concat(Class_1.bulldog.weight, "\n\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0436\u0438\u0437\u043D\u0438: ").concat(Class_1.bulldog.life, "\n\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: ").concat(Class_1.bulldog.cost), {
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
                });
                return [3 /*break*/, 19];
            case 19: return [2 /*return*/];
        }
    });
}); });
exports.bot.on('callback_query', function (query) { return __awaiter(void 0, void 0, void 0, function () {
    function favorite(fav) {
        if (fav == true) {
            exports.bot.sendMessage(query.message.chat.id, "Уже в избранном");
            return fav;
        }
        else {
            fav = true;
            exports.bot.sendMessage(query.message.chat.id, 'Добавленно в избранное');
            return fav;
        }
    }
    function not_favorite(fav) {
        if (fav == true) {
            fav = false;
            exports.bot.sendMessage(query.message.chat.id, "Удаленно из избранного");
            return fav;
        }
        else {
            exports.bot.sendMessage(query.message.chat.id, 'Данной породы нет в избранном');
            return fav;
        }
    }
    var random, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                random = (0, function_1.getRandomInt)(6);
                _a = query.data;
                switch (_a) {
                    case 'exotic_photo': return [3 /*break*/, 1];
                    case 'maine_coon_photo': return [3 /*break*/, 3];
                    case 'ragdoll_photo': return [3 /*break*/, 5];
                    case 'akita_inui_photo': return [3 /*break*/, 7];
                    case 'shepherd_photo': return [3 /*break*/, 9];
                    case 'bulldog_photo': return [3 /*break*/, 11];
                    case 'exotic_favorite': return [3 /*break*/, 13];
                    case 'exotic_not_favorite': return [3 /*break*/, 14];
                    case 'maine_coon_favorite': return [3 /*break*/, 15];
                    case 'maine_coon_not_favorite': return [3 /*break*/, 16];
                    case 'ragdoll_favorite': return [3 /*break*/, 17];
                    case 'ragdoll_not_favorite': return [3 /*break*/, 18];
                    case 'akita_inui_favorite': return [3 /*break*/, 19];
                    case 'akita_inui_not_favorite': return [3 /*break*/, 20];
                    case 'shepherd_favorite': return [3 /*break*/, 21];
                    case 'shepherd_not_favorite': return [3 /*break*/, 22];
                    case 'bulldog_favorite': return [3 /*break*/, 23];
                    case 'bulldog_not_favorite': return [3 /*break*/, 24];
                }
                return [3 /*break*/, 25];
            case 1: return [4 /*yield*/, exports.bot.sendPhoto(query.message.chat.id, fs.readFileSync(__dirname + "/animals/cat/".concat(Class_1.exotic.breed, "/").concat(random, ".jpg")))];
            case 2:
                _b.sent();
                return [3 /*break*/, 25];
            case 3: return [4 /*yield*/, exports.bot.sendPhoto(query.message.chat.id, fs.readFileSync(__dirname + "/animals/cat/".concat(Class_1.maine_coon.breed, "/").concat(random, ".jpg")))];
            case 4:
                _b.sent();
                return [3 /*break*/, 25];
            case 5: return [4 /*yield*/, exports.bot.sendPhoto(query.message.chat.id, fs.readFileSync(__dirname + "/animals/cat/".concat(Class_1.ragdoll.breed, "/").concat(random, ".jpg")))];
            case 6:
                _b.sent();
                return [3 /*break*/, 25];
            case 7: return [4 /*yield*/, exports.bot.sendPhoto(query.message.chat.id, fs.readFileSync(__dirname + "/animals/dog/".concat(Class_1.akita_inui.breed, "/").concat(random, ".jpg")))];
            case 8:
                _b.sent();
                return [3 /*break*/, 25];
            case 9: return [4 /*yield*/, exports.bot.sendPhoto(query.message.chat.id, fs.readFileSync(__dirname + "/animals/dog/".concat(Class_1.shepherd.breed, "/").concat(random, ".jpg")))];
            case 10:
                _b.sent();
                return [3 /*break*/, 25];
            case 11: return [4 /*yield*/, exports.bot.sendPhoto(query.message.chat.id, fs.readFileSync(__dirname + "/animals/dog/".concat(Class_1.bulldog.breed, "/").concat(random, ".jpg")))];
            case 12:
                _b.sent();
                return [3 /*break*/, 25];
            case 13:
                Class_1.exotic.favorite = favorite(Class_1.exotic.favorite);
                return [3 /*break*/, 25];
            case 14:
                Class_1.exotic.favorite = not_favorite(Class_1.exotic.favorite);
                return [3 /*break*/, 25];
            case 15:
                Class_1.maine_coon.favorite = favorite(Class_1.maine_coon.favorite);
                return [3 /*break*/, 25];
            case 16:
                Class_1.maine_coon.favorite = not_favorite(Class_1.maine_coon.favorite);
                return [3 /*break*/, 25];
            case 17:
                Class_1.ragdoll.favorite = favorite(Class_1.ragdoll.favorite);
                return [3 /*break*/, 25];
            case 18:
                Class_1.ragdoll.favorite = not_favorite(Class_1.ragdoll.favorite);
                return [3 /*break*/, 25];
            case 19:
                Class_1.akita_inui.favorite = favorite(Class_1.akita_inui.favorite);
                return [3 /*break*/, 25];
            case 20:
                Class_1.akita_inui.favorite = not_favorite(Class_1.akita_inui.favorite);
                return [3 /*break*/, 25];
            case 21:
                Class_1.shepherd.favorite = favorite(Class_1.shepherd.favorite);
                return [3 /*break*/, 25];
            case 22:
                Class_1.shepherd.favorite = not_favorite(Class_1.shepherd.favorite);
                return [3 /*break*/, 25];
            case 23:
                Class_1.bulldog.favorite = favorite(Class_1.bulldog.favorite);
                return [3 /*break*/, 25];
            case 24:
                Class_1.bulldog.favorite = not_favorite(Class_1.bulldog.favorite);
                return [3 /*break*/, 25];
            case 25: return [2 /*return*/];
        }
    });
}); });
exports.bot.onText(/\/start/, function (msg) {
    var text = "\u041F\u0440\u0438\u0432\u0435\u0442, ".concat(msg.from.first_name);
    exports.bot.sendMessage(msg.chat.id, text, {
        reply_markup: {
            keyboard: keyboard.home
        }
    });
});
