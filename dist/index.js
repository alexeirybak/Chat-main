/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/api.ts":
/*!********************!*\
  !*** ./src/api.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addApiComments: () => (/* binding */ addApiComments),
/* harmony export */   addLike: () => (/* binding */ addLike),
/* harmony export */   answerApiComments: () => (/* binding */ answerApiComments),
/* harmony export */   deleteApiComments: () => (/* binding */ deleteApiComments),
/* harmony export */   getApiComments: () => (/* binding */ getApiComments),
/* harmony export */   loginUser: () => (/* binding */ loginUser),
/* harmony export */   regUser: () => (/* binding */ regUser)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
var host = 'https://wedev-api.sky.pro/api/v2/alexeirybak14/comments';
function getApiComments(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var token = _b.token;
        return __generator(this, function (_c) {
            return [2 /*return*/, fetch(host, {
                    method: 'GET',
                    headers: {
                        Authorization: token,
                    },
                }).then(function (response) {
                    if (response.status === 401) {
                        throw new Error('Нет авторизации');
                    }
                    if (response.status === 500) {
                        throw new Error('Сервер сломался, попробуйте позже');
                    }
                    return response.json();
                })];
        });
    });
}
function addApiComments(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var text = _b.text, token = _b.token;
        return __generator(this, function (_c) {
            return [2 /*return*/, fetch(host, {
                    method: 'POST',
                    body: JSON.stringify({
                        text: text,
                    }),
                    headers: {
                        Authorization: token,
                    },
                }).then(function (response) {
                    if (response.status === 400) {
                        throw new Error('Комментарий должен быть не короче 3 символов');
                    }
                    if (response.status === 500) {
                        throw new Error('Сервер сломался, попробуй позже');
                    }
                    return response.json();
                })];
        });
    });
}
function answerApiComments(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var text = _b.text, token = _b.token;
        return __generator(this, function (_c) {
            return [2 /*return*/, fetch(host, {
                    method: 'POST',
                    body: JSON.stringify({
                        text: "\u041E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043B(\u0430): ".concat(text).replace(/Отредактировал(а): Отредактировал(а):/g, 'Отредактировал(а):'),
                    }),
                    headers: {
                        Authorization: token,
                    },
                }).then(function (response) {
                    if (response.status === 400) {
                        throw new Error('Комментарий должен быть не короче 3 символов');
                    }
                    if (response.status === 500) {
                        throw new Error('Сервер сломался, попробуй позже');
                    }
                    return response.json();
                })];
        });
    });
}
function loginUser(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var login = _b.login, password = _b.password;
        return __generator(this, function (_c) {
            return [2 /*return*/, fetch('https://wedev-api.sky.pro/api/user/login', {
                    method: 'POST',
                    body: JSON.stringify({
                        login: login,
                        password: password,
                    }),
                }).then(function (response) {
                    if (response.status === 400) {
                        throw new Error('Неверный логин или пароль');
                    }
                    return response.json();
                })];
        });
    });
}
function regUser(_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
        var login = _b.login, password = _b.password, name = _b.name;
        return __generator(this, function (_c) {
            return [2 /*return*/, fetch('https://wedev-api.sky.pro/api/user', {
                    method: 'POST',
                    body: JSON.stringify({
                        login: login,
                        password: password,
                        name: name,
                    }),
                }).then(function (response) {
                    if (response.status === 400) {
                        throw new Error('Такой пользователь уже существует');
                    }
                    return response.json();
                })];
        });
    });
}
function deleteApiComments(id, token) {
    return fetch("".concat(host, "/").concat(id), {
        method: 'DELETE',
        headers: {
            Authorization: token,
        },
    });
}
function addLike(token, id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, fetch("".concat(host, "/").concat(id, "/toggle-like"), {
                    method: 'POST',
                    headers: {
                        Authorization: token,
                    },
                }).then(function (response) {
                    return response.json();
                })];
        });
    });
}


/***/ }),

/***/ "./src/components/login-component.ts":
/*!*******************************************!*\
  !*** ./src/components/login-component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   renderLogin: () => (/* binding */ renderLogin),
/* harmony export */   userName: () => (/* binding */ userName)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./src/api.ts");

var name;
var userName = {};
function renderLogin(_a) {
    var appEl = _a.appEl, setToken = _a.setToken, getComments = _a.getComments;
    var isLoginMode = true;
    var renderForm = function () {
        var appHtml = "<div class=\"login-form\">\n                        <h3>\u0424\u043E\u0440\u043C\u0430 ".concat(isLoginMode ? 'входа' : 'регистрации', "</h3>\n                        ").concat(isLoginMode
            ? ''
            : "\n                        <input type=\"text\" id=\"name-input\" class=\"form-login\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F\"/>", "\n                        <input type=\"text\" id=\"login-input\" class=\"form-login\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043B\u043E\u0433\u0438\u043D\"/>\n                        <input type=\"password\" id=\"password-input\" class=\"form-password\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C\"/>\n                        \n                        <button class=\"login-form-button\" id=\"login-button\">").concat(isLoginMode ? 'Войти' : 'Перейти к регистрации', "</button>\n                  \n                          <button class=\"login-button\" id=\"toggle-button\">").concat(isLoginMode ? 'Перейти к регистрации' : 'Войти', "</button>");
        appEl.innerHTML = appHtml;
        var loginButton = document.getElementById('login-button');
        if (loginButton) {
            loginButton.addEventListener('click', function () {
                if (isLoginMode) {
                    var login = document.getElementById('login-input');
                    var password = document.getElementById('password-input');
                    login === null || login === void 0 ? void 0 : login.classList.remove('error');
                    if ((login === null || login === void 0 ? void 0 : login.value) == '') {
                        login.classList.add('error');
                        return;
                    }
                    password.classList.remove('error');
                    if (password.value == '') {
                        password.classList.add('error');
                        return;
                    }
                    (0,_api__WEBPACK_IMPORTED_MODULE_0__.loginUser)({
                        login: login.value,
                        password: password.value,
                    })
                        .then(function (user) {
                        setToken("Bearer ".concat(user.user.token));
                        userName = user.user.name;
                        getComments();
                    })
                        .catch(function (error) {
                        alert(error.message);
                    });
                }
                else {
                    var login = document.getElementById('login-input');
                    var password = document.getElementById('password-input');
                    var name_1 = document.getElementById('name-input');
                    login.classList.remove('error');
                    if (login.value == '') {
                        login.classList.add('error');
                        return;
                    }
                    password.classList.remove('error');
                    if (password.value == '') {
                        password.classList.add('error');
                        return;
                    }
                    name_1.classList.remove('error');
                    if (name_1.value == '') {
                        name_1.classList.add('error');
                        return;
                    }
                    (0,_api__WEBPACK_IMPORTED_MODULE_0__.regUser)({
                        login: login.value,
                        password: password.value,
                        name: name_1.value,
                    })
                        .then(function (user) {
                        setToken("Bearer ".concat(user.user.token));
                        userName = user.user.name;
                        getComments();
                    })
                        .catch(function (error) {
                        alert(error.message);
                    });
                }
            });
        }
        else {
            console.error('Элемент с id "login-button" не найден');
        }
        var toggleButton = document.getElementById('toggle-button');
        if (toggleButton) {
            toggleButton.addEventListener('click', function () {
                isLoginMode = !isLoginMode;
                renderForm();
            });
        }
    };
    renderForm();
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.ts ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getComments: () => (/* binding */ getComments)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./src/api.ts");
/* harmony import */ var _components_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login-component */ "./src/components/login-component.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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



var token = "";
var comments = [];
var initialLoading = true;
var isLoadingAdd = false;
var getComments = function () { return __awaiter(void 0, void 0, void 0, function () {
    var loaderElement;
    return __generator(this, function (_a) {
        if (initialLoading) {
            loaderElement = document.getElementById('app');
            if (loaderElement) {
                loaderElement.innerHTML = "<div class=\"preloader\">\n  <div class=\"preloader-image\">\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044F</div></div>";
            }
        }
        return [2 /*return*/, (0,_api__WEBPACK_IMPORTED_MODULE_1__.getApiComments)({ token: token }).then(function (responseData) {
                var appComments = responseData.comments.map(function (comment) {
                    return {
                        date: new Date(comment.date),
                        name: comment.author.name,
                        id: comment.id,
                        text: comment.text,
                        likes: comment.likes,
                        isLiked: comment.isLiked,
                        isLikeLoading: false,
                    };
                });
                comments = appComments;
                initialLoading = false;
                renderComments();
            })];
    });
}); };
getComments();
function formatDate(date) {
    var year = date.getFullYear().toString().slice(-2);
    var month = ('0' + (date.getMonth() + 1)).slice(-2);
    var day = ('0' + date.getDate()).slice(-2);
    var hours = ('0' + date.getHours()).slice(-2);
    var minutes = ('0' + date.getMinutes()).slice(-2);
    return "".concat(day, ".").concat(month, ".").concat(year, " ").concat(hours, ":").concat(minutes);
}
var sanitizeHtml = function (htmlString) {
    return htmlString
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/QUOTE_BEGIN/g, '<div class="quote">')
        .replace(/QUOTE_END/g, '</div>');
};
var renderComments = function () {
    var appEl = document.getElementById('app');
    var commentHTML = comments
        .map(function (comment, index) {
        return "<li data-index=\"".concat(index, "\" class=\"comment\">\n          <div class=\"comment-header\">\n            <div class=\"comment-name\">").concat(sanitizeHtml(comment.name), "</div>\n            <div>").concat(formatDate(new Date(comment.date)), "</div>\n          </div>\n          <div class=\"comment-body\">\n            <div class=\"comment-text\">").concat(sanitizeHtml(comment.text), "</div>\n          </div>\n          <div class=\"comment-footer\">\n          <button data-edit=\"").concat(index, "\" class=\"edit-button\">\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C</button>\n          <button data-id=\"").concat(index, "\" class=\"delete-button\" id=\"button-delete\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>\n            <div class=\"likes\">\n            <span class=\"likes-counter\">").concat(comment.likes, "</span>\n          <button data-id=\"").concat(comment.id, "\" data-index=\"").concat(index, "\" class=\"like-button ").concat(comment.isLiked ? '-active-like' : '-non-active-like', " ").concat(comment.isLikeLoading ? '-loading-like' : '', "\"></button></div></div>\n          </li>");
    })
        .join('');
    if (!token) {
        var appHtml_1 = "<ul class=\"comments\">\n                ".concat(commentHTML, "\n                </ul>\n                <p class=\"warning\">\u0427\u0442\u043E\u0431\u044B \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439, <button class=\"login-button\">\u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0443\u0439\u0442\u0435\u0441\u044C</button></p>");
        if (appEl) {
            appEl.innerHTML = appHtml_1;
        }
        var loginButton = document.querySelector('.login-button');
        if (loginButton) {
            loginButton.addEventListener('click', function () {
                if (appEl) {
                    (0,_components_login_component__WEBPACK_IMPORTED_MODULE_2__.renderLogin)({
                        appEl: appEl,
                        setToken: function (newToken) {
                            token = newToken;
                        },
                        getComments: getComments,
                    });
                }
            });
        }
        return;
    }
    var appHtml = "<ul class=\"comments\">\n                ".concat(commentHTML, "\n                </ul>\n                <div class=\"add-form-row\">\n                </div>\n                <div class=\"add-form\" id=\"add-comment\">\n                  <input\n                    type=\"text\"\n                    class=\"add-form-name\"\n                    placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043C\u044F\"\n                    disabled\n                    value=\"").concat(_components_login_component__WEBPACK_IMPORTED_MODULE_2__.userName, "\"\n                    id=\"name-input\"\n                    disabled/>\n                  <textarea\n                    type=\"textarea\"\n                    class=\"add-form-text\"\n                    placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439\"\n                    rows=\"4\"\n                    id=\"text-input\"\n                  ></textarea>\n                  <div class=\"add-form-row\">\n                    <button class=\"add-form-button\" id=\"button-add\">\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C</button>\n                  </div>\n                </div>\n                <div class=\"preloader\">\n                  <div id=\"form-loading\" class=\"hidden\">\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044F</div>\n                </div>");
    if (appEl) {
        appEl.innerHTML = appHtml;
    }
    var nameInputElement = document.getElementById('name-input');
    var textInputElement = document.getElementById('text-input');
    var buttonElement = document.getElementById('button-add');
    if (buttonElement) {
        buttonElement.classList.add('empty');
        buttonElement.disabled = true;
    }
    var loadingElement = document.getElementById('form-loading');
    if (loadingElement) {
        loadingElement.classList.add('preloader-image');
    }
    function answerComment() {
        var oldComments = document.querySelectorAll('.comment');
        oldComments.forEach(function (oldComment) {
            oldComment.addEventListener('click', function (event) {
                event.stopPropagation();
                var index = oldComment.dataset.index;
                if (index !== undefined && textInputElement) {
                    var commentIndex = Number(index);
                    textInputElement.value = "QUOTE_BEGIN ".concat(comments[commentIndex].text, "\n").concat(comments[commentIndex].name, " QUOTE_END");
                }
            });
        });
    }
    var deleteButtonElements = document.querySelectorAll('.delete-button');
    deleteButtonElements.forEach(function (deleteButtonElement) {
        deleteButtonElement.addEventListener('click', function (event) {
            event.stopPropagation();
            var index = deleteButtonElement.dataset.id;
            if (index) {
                var commentIndex = Number(index);
                (0,_api__WEBPACK_IMPORTED_MODULE_1__.deleteApiComments)(comments[commentIndex].id, token).then(function () {
                    return getComments();
                });
            }
        });
    });
    var addComment = function () {
        isLoadingAdd = true;
        renderForm(isLoadingAdd);
        if (textInputElement) {
            (0,_api__WEBPACK_IMPORTED_MODULE_1__.addApiComments)({
                text: sanitizeHtml(textInputElement.value),
                token: token,
            })
                .then(function () {
                return getComments();
            })
                .then(function () {
                isLoadingAdd = false;
                renderForm(isLoadingAdd);
                if (nameInputElement && textInputElement && buttonElement) {
                    nameInputElement.value = '';
                    textInputElement.value = '';
                    buttonElement.classList.add('empty');
                    buttonElement.disabled = true;
                }
            })
                .catch(function (error) {
                isLoadingAdd = false;
                renderForm(isLoadingAdd);
                alert(error.message);
            });
        }
        else {
            console.error('textInputElement is null');
        }
    };
    var handleInput = function () {
        if (nameInputElement && textInputElement && buttonElement) {
            if (nameInputElement.value.trim() !== '' &&
                textInputElement.value.trim() !== '') {
                buttonElement.disabled = false;
                buttonElement.classList.remove('empty');
            }
            else {
                buttonElement.disabled = true;
                buttonElement.classList.add('empty');
            }
        }
    };
    if (nameInputElement && textInputElement && buttonElement) {
        nameInputElement.addEventListener('input', handleInput);
        textInputElement.addEventListener('input', handleInput);
        buttonElement.addEventListener('click', addComment);
        textInputElement.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                addComment();
            }
        });
    }
    counterLikes();
    answerComment();
    var editButtonElements = document.querySelectorAll('.edit-button');
    editButtonElements.forEach(function (editButtonElement) {
        editButtonElement.addEventListener('click', function (event) {
            var _a;
            event.stopPropagation();
            var index = parseInt((_a = editButtonElement.dataset.edit) !== null && _a !== void 0 ? _a : '');
            if (!isNaN(index)) {
                if (editButtonElements[index].innerHTML === 'Редактировать') {
                    editButtonElements[index].innerHTML = 'Сохранить';
                    var commentBodyElements = document.querySelectorAll('.comment-text');
                    var commentBodyElement = commentBodyElements[index];
                    commentBodyElement.innerHTML = "<textarea type=\"textarea\" class=\"edit-comment\" rows=\"4\">".concat(comments[index].text, "</textarea>");
                }
                else {
                    var redactCommentElement = document.querySelectorAll('.edit-comment');
                    comments[index].text = redactCommentElement[0].value;
                    (0,_api__WEBPACK_IMPORTED_MODULE_1__.deleteApiComments)(comments[index].id, token).then(function () {
                        getComments();
                    });
                    (0,_api__WEBPACK_IMPORTED_MODULE_1__.answerApiComments)({
                        text: sanitizeHtml(comments[index].text),
                        token: token,
                    })
                        .then(function () { })
                        .then(function () {
                        getComments();
                        renderComments();
                    });
                    renderComments();
                }
            }
        });
    });
};
function counterLikes() {
    var likesButtonElements = document.querySelectorAll('.like-button');
    likesButtonElements.forEach(function (likesButtonElement) {
        likesButtonElement.addEventListener('click', function (event) {
            var _a;
            event.stopPropagation();
            var index = parseInt((_a = likesButtonElement.dataset.index) !== null && _a !== void 0 ? _a : '');
            var commentId = comments[index].id;
            (0,_api__WEBPACK_IMPORTED_MODULE_1__.addLike)(token, commentId).then(function () {
                return getComments();
            });
        });
    });
}
var renderForm = function (isLoading) {
    var formWindow = document.querySelector('.add-form');
    var loaderText = document.getElementById('form-loading');
    if (loaderText && formWindow) {
        if (isLoading) {
            loaderText.classList.remove('hidden');
            formWindow.classList.add('hidden');
        }
        else {
            loaderText.classList.add('hidden');
            formWindow.classList.remove('hidden');
        }
    }
};

})();

/******/ })()
;
//# sourceMappingURL=index.js.map