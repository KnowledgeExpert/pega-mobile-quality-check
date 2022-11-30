/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!*****************************!*\
  !*** ./test-maker.local.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const testMakerLocalConfig = {
    runner: {
        liveMode: false,
        headless: false,
        timeout: {
            selector: 10000,
            assertion: 12000
        },
        adapters: [
            {
                name: `appium`,
                options: {
                    // logLevel:`info`,
                    clients: [
                        {
                            name: `android:chrome`,
                            options: {
                                "appium:deviceName": `emulator-5556`,
                            }
                        },
                        // {
                        //     name: `ios:safari`,
                        //     options: {
                        //         "appium:deviceName": `iPhone 13 Pro Max`,
                        //     }
                        // },
                    ]
                }
            }
        ]
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (testMakerLocalConfig);

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0cHV0LmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDSkEsTUFBTSxvQkFBb0IsR0FBa0I7SUFDeEMsTUFBTSxFQUFFO1FBQ0osUUFBUSxFQUFFLEtBQUs7UUFDZixRQUFRLEVBQUUsS0FBSztRQUNmLE9BQU8sRUFBRTtZQUNMLFFBQVEsRUFBRSxLQUFLO1lBQ2YsU0FBUyxFQUFFLEtBQUs7U0FDbkI7UUFDRCxRQUFRLEVBQUU7WUFDTjtnQkFDSSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxPQUFPLEVBQUU7b0JBQ0wsbUJBQW1CO29CQUNuQixPQUFPLEVBQUU7d0JBQ0w7NEJBQ0EsSUFBSSxFQUFFLGdCQUFnQjs0QkFDdEIsT0FBTyxFQUFDO2dDQUNSLG1CQUFtQixFQUFFLGVBQWU7NkJBQ25DO3lCQUNBO3dCQUNELElBQUk7d0JBQ0osMEJBQTBCO3dCQUMxQixpQkFBaUI7d0JBQ2pCLG9EQUFvRDt3QkFDcEQsUUFBUTt3QkFDUixLQUFLO3FCQUNSO2lCQUNKO2FBQ0o7U0FDSjtLQUNKO0NBRUosQ0FBQztBQUNGLGlFQUFlLG9CQUFvQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0IiwiRDpcXHBlZ2EtbW9iaWxlLXF1YWxpdHktY2hlY2tcXHRlc3QtbWFrZXIubG9jYWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSBcInRlc3QtbWFrZXJcIjtcclxuXHJcbmNvbnN0IHRlc3RNYWtlckxvY2FsQ29uZmlnOiBDb25maWd1cmF0aW9uID0ge1xyXG4gICAgcnVubmVyOiB7XHJcbiAgICAgICAgbGl2ZU1vZGU6IGZhbHNlLFxyXG4gICAgICAgIGhlYWRsZXNzOiBmYWxzZSxcclxuICAgICAgICB0aW1lb3V0OiB7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAxMDAwMCxcclxuICAgICAgICAgICAgYXNzZXJ0aW9uOiAxMjAwMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWRhcHRlcnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogYGFwcGl1bWAsXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbG9nTGV2ZWw6YGluZm9gLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBgYW5kcm9pZDpjaHJvbWVgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhcHBpdW06ZGV2aWNlTmFtZVwiOiBgZW11bGF0b3ItNTU1NmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgbmFtZTogYGlvczpzYWZhcmlgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIFwiYXBwaXVtOmRldmljZU5hbWVcIjogYGlQaG9uZSAxMyBQcm8gTWF4YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcbiAgICBcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgdGVzdE1ha2VyTG9jYWxDb25maWc7XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=