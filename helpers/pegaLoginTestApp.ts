import { pega } from "pega-model";
import { I, Selector } from "test-maker";
import { getUrl } from "../src/utilities/getUrl";


export async function pegaLoginTestApp() {
    await I.goto(getUrl('https://pega870-web.tm.k-expert.com/prweb/app/default/beEBp4uRVTogorRwSwWqbOtn9IL2fwdI*/!STANDARD'));
    await pega.elementById({id:'txtUserID'}).set(`test.cafe1`);
    await pega.elementById({id:'txtPassword'}).set(`Rulesdec22!`);
    await pega.buttonById('sub').click()
    

//     await I.resizeWindow(1920, 1080);
//     // await I.maximizeWindow();
//     await I.click(Selector('[class="menu-item-icon-imageclass pi pi-plus"]'))
//         .click(Selector('.menu-item-title-wrap').withExactText('TestCafe').filterVisible());
//     await I.expectSelector('.heading_2', { timeout: 20000 }).toBeVisible();
//     await I.expect(Selector('.heading_2').innerText).toEqual('TestScreen');
 }