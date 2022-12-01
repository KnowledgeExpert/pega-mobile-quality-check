import { Configuration, Feature, I, Selector } from "test-maker";
import { pega } from "pega-model";
import { app } from "../model/app";
import { pegaLoginTestApp } from "../../helpers/pegaLoginTestApp";




Feature(`Update restore configuration - Pega`)
    //.clients(['chrome'])
    .before(async (I, runInfo) => {
        await pegaLoginTestApp();
    })
    .Scenario(`update-restore`)
    .Given('TestCafe Case', async (_I, _runInfo) => {
        await pega.frame.switchToDefault();
        await app.case.createCaseWithTitle("TestCafe");
        await I.debugger()
    })
    .Then('Radio Button Check', async (_I, _runInfo) => {
        await pega.radioButtonByPartialId("c7b7c7aeOption A").click("Option A");
    })
    .Then('Text Area Check', async (_I, _runInfo) => {
        await pega.textInputByDataTestId("TestTextInput").set("test");
        await pega.textInputById("7cb3eb52").set("test");

    })
    .Then('Drop Down Check', async (_I, _runInfo) => {
        await pega.dropdownByDataTestId("TestDropdown").select("Adventure");
    })
    .Then('Check Box Check', async (_I, _runInfo) => {
        // await I.debugger()
        // await pega.elementByXpath(`//*[@data-test-id="CheckBox"]`).check()
        await I.debugger()

        await pega.checkboxByDataTestId("CheckBox").check();
        await I.debugger()

    })
    
    .Then('Check Box 2 Check', async (_I, _runInfo) => {
         await I.debugger()

        await pega.checkboxById("022f3283").check();
           await I.debugger()

    })
    .Then('Slider Check', async (_I, _runInfo) => {
        await pega.elementById({id:"34452f0e"}).set(80);
    })