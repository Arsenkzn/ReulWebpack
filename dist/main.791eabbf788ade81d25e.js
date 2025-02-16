/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("const volumeSlider = document.getElementById('volumeSlider');\r\n    const buttons = document.querySelectorAll('.buttons button');\r\n    const summerAudio = document.getElementById('summerAudio');\r\n    const rainAudio = document.getElementById('rainAudio');\r\n    const winterAudio = document.getElementById('winterAudio');\r\n    let currentAudio = null;\r\n\r\n    // Volume control\r\n    volumeSlider.addEventListener('input', function() {\r\n        summerAudio.volume = this.value;\r\n        rainAudio.volume = this.value;\r\n        winterAudio.volume = this.value;\r\n    });\r\n\r\n    // Play/Pause and background update\r\n    buttons.forEach(button => {\r\n        button.addEventListener('click', function() {\r\n            const sound = this.dataset.sound;\r\n            let audio;\r\n\r\n            switch (sound) {\r\n                case 'summer':\r\n                    audio = summerAudio;\r\n                    document.body.className = 'summer-bg';\r\n                    break;\r\n                case 'rain':\r\n                    audio = rainAudio;\r\n                    document.body.className = 'rain-bg';\r\n                    break;\r\n                case 'winter':\r\n                    audio = winterAudio;\r\n                    document.body.className = 'winter-bg';\r\n                    break;\r\n            }\r\n\r\n            if (currentAudio === audio) {\r\n                if (audio.paused) {\r\n                    audio.play();\r\n                } else {\r\n                    audio.pause();\r\n                }\r\n            } else {\r\n                if (currentAudio) {\r\n                    currentAudio.pause();\r\n                    currentAudio.currentTime = 0;\r\n                }\r\n                audio.play();\r\n                currentAudio = audio;\r\n            }\r\n        });\r\n    });\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;