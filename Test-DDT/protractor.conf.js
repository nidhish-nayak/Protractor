// An example configuration file
exports.config = {

    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // For running without selenium server.
    // directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    // capabilities: {
    //     browserName: 'chrome'
    // },

    framework: 'jasmine',

    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: [
        './ReadFromJson.js'
    ],

    // Options to be passed to Jasmine-node.
    // jasmineNodeOpts: {
    //     showColors: true, // Use colors in the command line report.
    //     defaultTimeoutInterval: 30000,
    // }

    params: require('./TestData/test.json')
};