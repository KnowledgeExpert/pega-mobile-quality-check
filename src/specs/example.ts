import { Feature, Selector, Controller } from 'test-maker';
import { pega} from "pega-model";

Feature(`Example Feature`)
    .Scenario(`Example Scenario`)
    .Given(`We Visit google search page`, async (I) => {
        await I.goto(`https://google.com/`);

        // uncomment the code below if from your location google shows a popup asking for user's consent for data and cookies
        const dialogModal = Selector(`[role="dialog"] .VDity button:last-of-type`, { timeout: 2000 });
        if (await dialogModal.exists) {
            await I.focus(dialogModal);
            await I.pressEnterKey();
        }
    })
    .When(`We Search For Query`, async (I) => {
        await I.fillField(`[name="q"]`, `knowledge expert`)
               .pressEnterKey();
    })
    .Then(`We Get result`, async (I: Controller) => {
   await I.click(`//*[text()="Knowledge Expert"]`)
        
    })
    .Then(`We Try Pega Elements`, async (I: Controller) => {
        if(await Selector(`//*[text()="Accept All"]`).exists){
            await pega.elementByXpath(`//*[text()="Accept All"]`).click();       

        }
         await pega.elementByXpath(`//*[@id="MENU_AS_CONTAINER_TOGGLE"]`).click();

        await pega.elementByXpath(`//button[@aria-label="KE Teams"]`).click();
        await pega.elementByXpath(`//a[text()="Tech Knights"]`).click();

        await pega.elementByXpath(`//*[text()="CONNECT WITH KE"]`).click()
        await pega.elementById({id:"input_comp-kzxoooua"}).set("ke@gmail.com")
        await pega.elementById({id:'input_comp-kzxooouq'}).set("Test")
        await pega.textAreaById(`textarea_comp-kzxoooux`).set("test")
        await pega.elementByXpath(`//*[text()="Send"]`).click()
        await I.debugger()
   
        })
