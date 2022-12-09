import { Configuration, Feature, I, Selector } from "test-maker";
import { pega, today } from "pega-model";
import { app } from "../model/app";
import { pegaLoginTestApp } from "../../helpers/pegaLoginTestApp";
import dragAndDrop from "webdriverio/build/commands/element/dragAndDrop";




Feature(`Update restore configuration - Pega`)
    //.clients(['chrome'])
    .before(async (I, runInfo) => {
        await pegaLoginTestApp();
    })
    .Scenario(`update-restore`)
    .Given('TestCafe Case', async (_I, _runInfo) => {
        await pega.frame.switchToDefault();
        await app.case.createCaseWithTitle("TestCafe");
    })
    .Then('Radio Button Check', async (_I, _runInfo) => {
        await pega.radioButtonByPartialId("c7b7c7aeOption A").click("Option A");
    })
    .Then('Text Area Check', async (_I, _runInfo) => {
        await pega.textInputByDataTestId("TestTextInput").set("test");

    })
    .Then('Drop Down Check', async (_I, _runInfo) => {
        await pega.dropdownByDataTestId("TestDropdown").select("Adventure");
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

    })
    .Then('Radio button Check', async (_I, _runInfo) => {
        await pega.radioButtonByPartialId(`59a458bbProse`).click("Prose");
    })
    .Then('Textarea Check', async (_I, _runInfo) => {
        await pega.textAreaByDataTestId(`2020040704574204631295`).set("test");
    })
   
    .Then('Button Check', async (_I, _runInfo) => {
        await pega.buttonByDataTestId(`202009180548390421478`).click();
    })
    // .Then('Text Input Check', async (_I, _runInfo) => {
    //     await pega.datePickerByDataTestId("2020040704574204642498").set(today.toString());
    // })
    .Then('Right Click Check', async (_I, _runInfo) => {

        await pega.buttonByDataTestId("RightClick").rightClick();

    })
    .Then('Duble Click Check', async (_I, _runInfo) => {

        await pega.buttonByDataTestId("DoubleClick").doubleClick();

    })
    .Then('Hover button Check', async (_I, _runInfo) => {

        await pega.buttonByDataTestId("HoverButton").hoverAndClick();

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
        await I.wait(1000)

       // await pega.autocompletionField('202004070615060327134211').selectResultFromExternalSource('.Books', 'Hamlet');
        await pega.autocompletionField('202004070615060327134211').filterAndSelect('Hamlet');

        await pega.buttonByDataTestId("202004070615060328135781").click();
        await pega.checkboxByDataTestId("202004070615060484168703").check();
        await pega.elementByXpath(`//*[@data-test-id="20200407061506048517139"]`).click();
    }) 
    .Then('Add Content', async (_I, _runInfo) => {
      
        await pega.elementByXpath(`//*[@class="icon icon-openclose"]`).click()
        await pega.elementByXpath(`//a[@data-test-id="201904150733200578181206"]`).click()
            await I.wait(1000)
            const client = await I.getClientInfo()
                if (client.os.name === `Android`) {
                    await I.switchContext(`NATIVE_APP`)
                    try {
                        await I.click(Selector(`[id="com.android.permissioncontroller:id/permission_allow_one_time_button"]`,{timeout:3000}))
                        await pega.elementByXpath(`/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.TabHost/android.widget.LinearLayout/android.widget.FrameLayout/com.android.internal.widget.ViewPager/android.widget.RelativeLayout/com.android.internal.widget.RecyclerView/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.ImageView`).click()
                        await pega.elementByXpath(`//android.widget.ImageView[@content-desc="Shutter"]`).click()
                        await pega.elementByXpath(`//android.widget.ImageButton[@content-desc="Done"]`).click()
                    } catch (e) { }
                    await I.switchContext(`CHROMIUM`)
                }  

                await I.debugger()

                //await pega.buttonByDataTestId("2014121801251706289770").click()


    }) 