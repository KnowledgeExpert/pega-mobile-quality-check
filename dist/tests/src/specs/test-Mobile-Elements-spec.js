(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./helpers/pegaLoginTestApp.ts":
/*!*************************************!*\
  !*** ./helpers/pegaLoginTestApp.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pegaLoginTestApp": () => (/* binding */ pegaLoginTestApp)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "./node_modules/test-maker/node_modules/source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pega_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pega-model */ "pega-model");
/* harmony import */ var pega_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pega_model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var test_maker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! test-maker */ "test-maker");
/* harmony import */ var test_maker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(test_maker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_utilities_getUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/utilities/getUrl */ "./src/utilities/getUrl.ts");




async function pegaLoginTestApp() {
    await test_maker__WEBPACK_IMPORTED_MODULE_2__.I.goto((0,_src_utilities_getUrl__WEBPACK_IMPORTED_MODULE_3__.getUrl)('https://pega870-web.tm.k-expert.com/prweb/app/default/beEBp4uRVTogorRwSwWqbOtn9IL2fwdI*/!STANDARD'));
    await pega_model__WEBPACK_IMPORTED_MODULE_1__.pega.elementById({ id: 'txtUserID' }).set(`test.cafe1`);
    await pega_model__WEBPACK_IMPORTED_MODULE_1__.pega.elementById({ id: 'txtPassword' }).set(`Rulesdec22!`);
    await pega_model__WEBPACK_IMPORTED_MODULE_1__.pega.buttonById('sub').click();
    //     await I.resizeWindow(1920, 1080);
    //     // await I.maximizeWindow();
    //     await I.click(Selector('[class="menu-item-icon-imageclass pi pi-plus"]'))
    //         .click(Selector('.menu-item-title-wrap').withExactText('TestCafe').filterVisible());
    //     await I.expectSelector('.heading_2', { timeout: 20000 }).toBeVisible();
    //     await I.expect(Selector('.heading_2').innerText).toEqual('TestScreen');
}


/***/ }),

/***/ "./src/model/app.ts":
/*!**************************!*\
  !*** ./src/model/app.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App),
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "./node_modules/test-maker/node_modules/source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./case */ "./src/model/case.ts");
/* harmony import */ var _globalActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globalActions */ "./src/model/globalActions.ts");



class App {
    constructor() {
        this.globalActions = new _globalActions__WEBPACK_IMPORTED_MODULE_2__.GlobalActions();
        this.case = new _case__WEBPACK_IMPORTED_MODULE_1__.Case();
    }
}
const app = new App();


/***/ }),

/***/ "./src/model/case.ts":
/*!***************************!*\
  !*** ./src/model/case.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Case": () => (/* binding */ Case)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "./node_modules/test-maker/node_modules/source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pega_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pega-model */ "pega-model");
/* harmony import */ var pega_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pega_model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var test_maker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! test-maker */ "test-maker");
/* harmony import */ var test_maker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(test_maker__WEBPACK_IMPORTED_MODULE_2__);



class Case {
    async createCaseWithTitle(title) {
        //await I.resizeWindow(1600, 900);
        await test_maker__WEBPACK_IMPORTED_MODULE_2__.I.click(`//*[@class="menu-item-icon-imageclass pi pi-more-alt"]`);
        await test_maker__WEBPACK_IMPORTED_MODULE_2__.I.click(`//*[@class="menu-item-icon-imageclass pi pi-plus"]`);
        await pega_model__WEBPACK_IMPORTED_MODULE_1__.pega.elementByXpath(`//*[@class="menu-item-title"][contains(text(),"${title}")]`).shouldBeVisible();
        await pega_model__WEBPACK_IMPORTED_MODULE_1__.pega.elementByXpath(`//*[@class="menu-item-title"][contains(text(),"${title}")]`).click();
        //await pega.frame.switchToWorkAreaIframe()
        //await pega.elementByXpath(`//a[@data-test-id="202209051850320960738"]`).click();
    }
}


/***/ }),

/***/ "./src/model/globalActions.ts":
/*!************************************!*\
  !*** ./src/model/globalActions.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalActions": () => (/* binding */ GlobalActions)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "./node_modules/test-maker/node_modules/source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pega_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pega-model */ "pega-model");
/* harmony import */ var pega_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pega_model__WEBPACK_IMPORTED_MODULE_1__);


class GlobalActions {
    async continue() {
        await pega_model__WEBPACK_IMPORTED_MODULE_1__.pega.button.byText(`Continue`).click();
    }
    async confirm() {
        await pega_model__WEBPACK_IMPORTED_MODULE_1__.pega.button.byText(`Confirmer`).click();
    }
    async submit() {
        await pega_model__WEBPACK_IMPORTED_MODULE_1__.pega.button.submit().click();
    }
    async validate() {
        await pega_model__WEBPACK_IMPORTED_MODULE_1__.pega.button.byText(`Valider`).click();
    }
    async yesContinue() {
        await pega_model__WEBPACK_IMPORTED_MODULE_1__.pega.buttonByDataTestId(`2014121801251706289770`).click();
    }
    async submitButton() {
        await pega_model__WEBPACK_IMPORTED_MODULE_1__.pega.buttonById(`submitButton`).click();
    }
    async submitModal() {
        //await pega.frame.switchToWorkAreaIframe();
        await pega_model__WEBPACK_IMPORTED_MODULE_1__.pega.buttonById(`ModalButtonSubmit`).click();
    }
    async cancel() {
        //await pega.frame.switchToWorkAreaIframe();
        await pega_model__WEBPACK_IMPORTED_MODULE_1__.pega.button.byText(`Cancel`).click();
    }
    async continuer() {
        await pega_model__WEBPACK_IMPORTED_MODULE_1__.pega.button.byText(`Continuer`).click();
    }
    async ContinueProcess() {
        await pega_model__WEBPACK_IMPORTED_MODULE_1__.pega.button.byText(`Continue Process`).click();
    }
    async noWait() {
        await pega_model__WEBPACK_IMPORTED_MODULE_1__.pega.button.byText(`No (wait)`).click();
    }
}


/***/ }),

/***/ "./src/specs/test-Mobile-Elements-spec.ts":
/*!************************************************!*\
  !*** ./src/specs/test-Mobile-Elements-spec.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "./node_modules/test-maker/node_modules/source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var test_maker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! test-maker */ "test-maker");
/* harmony import */ var test_maker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(test_maker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pega_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pega-model */ "pega-model");
/* harmony import */ var pega_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pega_model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _model_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/app */ "./src/model/app.ts");
/* harmony import */ var _helpers_pegaLoginTestApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/pegaLoginTestApp */ "./helpers/pegaLoginTestApp.ts");





(0,test_maker__WEBPACK_IMPORTED_MODULE_1__.Feature)(`Update restore configuration - Pega`)
    //.clients(['chrome'])
    .before(async (I, runInfo) => {
    try {
        await (0,_helpers_pegaLoginTestApp__WEBPACK_IMPORTED_MODULE_4__.pegaLoginTestApp)();
    }
    catch (e) {
        e.fromSpec = true;
        e.filePath = `D:/pega-mobile-quality-check/src/specs/test-Mobile-Elements-spec.ts`;
        throw e;
    }
})
    .Scenario(`update-restore`)
    .Given('TestCafe Case', async (_I, _runInfo) => {
    try {
        await pega_model__WEBPACK_IMPORTED_MODULE_2__.pega.frame.switchToDefault();
        await _model_app__WEBPACK_IMPORTED_MODULE_3__.app["case"].createCaseWithTitle("TestCafe");
    }
    catch (e) {
        e.fromSpec = true;
        e.filePath = `D:/pega-mobile-quality-check/src/specs/test-Mobile-Elements-spec.ts`;
        throw e;
    }
})
    .Then('Radio Button Check', async (_I, _runInfo) => {
    try {
        await pega_model__WEBPACK_IMPORTED_MODULE_2__.pega.radioButtonByPartialId("c7b7c7aeOption A").click("Option A");
    }
    catch (e) {
        e.fromSpec = true;
        e.filePath = `D:/pega-mobile-quality-check/src/specs/test-Mobile-Elements-spec.ts`;
        throw e;
    }
})
    .Then('Text Area Check', async (_I, _runInfo) => {
    try {
        await pega_model__WEBPACK_IMPORTED_MODULE_2__.pega.textInputByDataTestId("TestTextInput").set("test");
    }
    catch (e) {
        e.fromSpec = true;
        e.filePath = `D:/pega-mobile-quality-check/src/specs/test-Mobile-Elements-spec.ts`;
        throw e;
    }
})
    .Then('Drop Down Check', async (_I, _runInfo) => {
    try {
        await pega_model__WEBPACK_IMPORTED_MODULE_2__.pega.dropdownByDataTestId("TestDropdown").select("Adventure");
    }
    catch (e) {
        e.fromSpec = true;
        e.filePath = `D:/pega-mobile-quality-check/src/specs/test-Mobile-Elements-spec.ts`;
        throw e;
    }
})
    // .Then('Check Box Check', async (_I, _runInfo) => {
    //     // await I.debugger()
    //     // await pega.elementByXpath(`//*[@data-test-id="CheckBox"]`).check()
    //     await I.debugger()
    //     await pega.checkboxByDataTestId("CheckBox").check();
    //     await I.debugger()
    // })
    // .Then('Check Box 2 Check', async (_I, _runInfo) => {
    //      await I.debugger()
    //     await pega.checkboxById("022f3283").check();
    //        await I.debugger()
    // })
    .Then('Slider Check', async (_I, _runInfo) => {
    try {
    }
    catch (e) {
        e.fromSpec = true;
        e.filePath = `D:/pega-mobile-quality-check/src/specs/test-Mobile-Elements-spec.ts`;
        throw e;
    }
})
    .Then('Radio button Check', async (_I, _runInfo) => {
    try {
        await pega_model__WEBPACK_IMPORTED_MODULE_2__.pega.radioButtonByPartialId(`59a458bbProse`).click("Prose");
    }
    catch (e) {
        e.fromSpec = true;
        e.filePath = `D:/pega-mobile-quality-check/src/specs/test-Mobile-Elements-spec.ts`;
        throw e;
    }
})
    .Then('Textarea Check', async (_I, _runInfo) => {
    try {
        await pega_model__WEBPACK_IMPORTED_MODULE_2__.pega.textAreaByDataTestId(`2020040704574204631295`).set("test");
    }
    catch (e) {
        e.fromSpec = true;
        e.filePath = `D:/pega-mobile-quality-check/src/specs/test-Mobile-Elements-spec.ts`;
        throw e;
    }
})
    .Then('Button Check', async (_I, _runInfo) => {
    try {
        await pega_model__WEBPACK_IMPORTED_MODULE_2__.pega.buttonByDataTestId(`202009180548390421478`).click();
    }
    catch (e) {
        e.fromSpec = true;
        e.filePath = `D:/pega-mobile-quality-check/src/specs/test-Mobile-Elements-spec.ts`;
        throw e;
    }
})
    // .Then('Text Input Check', async (_I, _runInfo) => {
    //     await pega.datePickerByDataTestId("2020040704574204642498").set(today.toString());
    // })
    .Then('Right Click Check', async (_I, _runInfo) => {
    try {
        await pega_model__WEBPACK_IMPORTED_MODULE_2__.pega.buttonByDataTestId("RightClick").rightClick();
    }
    catch (e) {
        e.fromSpec = true;
        e.filePath = `D:/pega-mobile-quality-check/src/specs/test-Mobile-Elements-spec.ts`;
        throw e;
    }
})
    .Then('Duble Click Check', async (_I, _runInfo) => {
    try {
        await pega_model__WEBPACK_IMPORTED_MODULE_2__.pega.buttonByDataTestId("DoubleClick").doubleClick();
    }
    catch (e) {
        e.fromSpec = true;
        e.filePath = `D:/pega-mobile-quality-check/src/specs/test-Mobile-Elements-spec.ts`;
        throw e;
    }
})
    .Then('Hover button Check', async (_I, _runInfo) => {
    try {
        await pega_model__WEBPACK_IMPORTED_MODULE_2__.pega.buttonByDataTestId("HoverButton").hoverAndClick();
    }
    catch (e) {
        e.fromSpec = true;
        e.filePath = `D:/pega-mobile-quality-check/src/specs/test-Mobile-Elements-spec.ts`;
        throw e;
    }
})
    // .Then('New Window Fill Check', async (_I, _runInfo) => {
    //     await pega.buttonByDataTestId("2020040704574204653718").click();
    //     await pega.textInputByDataTestId("202004070507140328a681364c-c680-4f4f-ad94-b3c67b24de71782").paste("test")
    //     await pega.textInputByDataTestId("202004070523280603b6effa15-90b9-4285-b1a5-eb93e69b70c3180").paste("test")
    //     await pega.radioButtonByPartialId("bf4dd451false").click("False");
    //     await pega.autocompletionFieldByDataTestId("202004070523280604f8b407b8-261b-410d-b6d3-4cd999cec8e9193").filterAndSelect("France")
    //     await pega.multiselectById("fafff1e2").selectValuesFromList(["Choice1","Choice3"]);
    //     await pega.buttonById("ModalButtonSubmit").click();
    //     //await pega.buttonById("ModalButtonCancel").click();
    // })
    // .Then('upload', async (_I, _runInfo) => {
    //     await pega.buttonByDataTestId("2020040704574204654271").click();
    // await I.wait(1000)
    // const client = await I.getClientInfo()
    //     if (client.os.name === `Android`) {
    //         await I.switchContext(`NATIVE_APP`)
    //         try {
    //             await I.click(Selector(`[id="com.android.permissioncontroller:id/permission_allow_one_time_button"]`,{timeout:30000}))
    //             await pega.elementByXpath(`/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.TabHost/android.widget.LinearLayout/android.widget.FrameLayout/com.android.internal.widget.ViewPager/android.widget.RelativeLayout/com.android.internal.widget.RecyclerView/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.ImageView`).click()
    //             await pega.elementByXpath(`//android.widget.ImageView[@content-desc="Shutter"]`).click()
    //             await pega.elementByXpath(`//android.widget.ImageButton[@content-desc="Done"]`).click()
    //         } catch (e) { }
    //         await I.switchContext(`CHROMIUM`)
    //     }  
    // })
    .Then('Add Book', async (_I, _runInfo) => {
    try {
        await test_maker__WEBPACK_IMPORTED_MODULE_1__.I.wait(1000);
        // await pega.autocompletionField('202004070615060327134211').selectResultFromExternalSource('.Books', 'Hamlet');
        await pega_model__WEBPACK_IMPORTED_MODULE_2__.pega.autocompletionField('202004070615060327134211').filterAndSelect('Hamlet');
        await pega_model__WEBPACK_IMPORTED_MODULE_2__.pega.buttonByDataTestId("202004070615060328135781").click();
        await pega_model__WEBPACK_IMPORTED_MODULE_2__.pega.checkboxByDataTestId("202004070615060484168703").check();
        await pega_model__WEBPACK_IMPORTED_MODULE_2__.pega.elementByXpath(`//*[@data-test-id="20200407061506048517139"]`).click();
    }
    catch (e) {
        e.fromSpec = true;
        e.filePath = `D:/pega-mobile-quality-check/src/specs/test-Mobile-Elements-spec.ts`;
        throw e;
    }
})
    .Then('Add Content', async (_I, _runInfo) => {
    try {
        await pega_model__WEBPACK_IMPORTED_MODULE_2__.pega.elementByXpath(`//*[@class="icon icon-openclose"]`).click();
        await pega_model__WEBPACK_IMPORTED_MODULE_2__.pega.elementByXpath(`//a[@data-test-id="201904150733200578181206"]`).click();
        await test_maker__WEBPACK_IMPORTED_MODULE_1__.I.wait(1000);
        const client = await test_maker__WEBPACK_IMPORTED_MODULE_1__.I.getClientInfo();
        if (client.os.name === `Android`) {
            await test_maker__WEBPACK_IMPORTED_MODULE_1__.I.switchContext(`NATIVE_APP`);
            try {
                await test_maker__WEBPACK_IMPORTED_MODULE_1__.I.click((0,test_maker__WEBPACK_IMPORTED_MODULE_1__.Selector)(`[id="com.android.permissioncontroller:id/permission_allow_one_time_button"]`, { timeout: 3000 }));
                await pega_model__WEBPACK_IMPORTED_MODULE_2__.pega.elementByXpath(`/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.TabHost/android.widget.LinearLayout/android.widget.FrameLayout/com.android.internal.widget.ViewPager/android.widget.RelativeLayout/com.android.internal.widget.RecyclerView/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.ImageView`).click();
                await pega_model__WEBPACK_IMPORTED_MODULE_2__.pega.elementByXpath(`//android.widget.ImageView[@content-desc="Shutter"]`).click();
                await pega_model__WEBPACK_IMPORTED_MODULE_2__.pega.elementByXpath(`//android.widget.ImageButton[@content-desc="Done"]`).click();
            }
            catch (e) { }
            await test_maker__WEBPACK_IMPORTED_MODULE_1__.I.switchContext(`CHROMIUM`);
        }
        await test_maker__WEBPACK_IMPORTED_MODULE_1__.I["debugger"]();
    }
    catch (e) {
        e.fromSpec = true;
        e.filePath = `D:/pega-mobile-quality-check/src/specs/test-Mobile-Elements-spec.ts`;
        throw e;
    }
});


/***/ }),

/***/ "./src/utilities/getUrl.ts":
/*!*********************************!*\
  !*** ./src/utilities/getUrl.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUrl": () => (/* binding */ getUrl)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "./node_modules/test-maker/node_modules/source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);

function getUrl(env) {
    let url = '';
    switch (env) {
        case `dev`:
            url = 'https://kexpert02.pegalabs.io/prweb';
            break;
        case `stage`:
            url = 'https://kexpert02.pegalabs.io/prweb';
            break;
        default:
            url = 'https://pega870-web.tm.k-expert.com/prweb/app/default/beEBp4uRVTogorRwSwWqbOtn9IL2fwdI*/!STANDARD';
            break;
    }
    return url;
}


/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "pega-model":
/*!*****************************!*\
  !*** external "pega-model" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("pega-model");

/***/ }),

/***/ "test-maker":
/*!*****************************!*\
  !*** external "test-maker" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("test-maker");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_test-maker_node_modules_source-map-support_register_js"], () => (__webpack_require__("./src/specs/test-Mobile-Elements-spec.ts")))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"./src/specs/test-Mobile-Elements-spec": 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = (chunkId) => (installedChunks[chunkId]);
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("../../" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			__webpack_require__.e("vendors-node_modules_test-maker_node_modules_source-map-support_register_js");
/******/ 			return next();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=test-Mobile-Elements-spec.js.map