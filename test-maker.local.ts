import { Configuration } from "test-maker";

const testMakerLocalConfig: Configuration = {
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
                        options:{
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
export default testMakerLocalConfig;

