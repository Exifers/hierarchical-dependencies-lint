const configFileConfig = require('./configFileParse');
const argsConfig = require('./argParse');
const defaultConfig = require('../projectConfig/configDefaultValues');

const mergeConfigs = (...args) => {
    let target = {};
    for (let arg of args) {
        Object.keys(arg).forEach(key => {
            if (arg[key]) {
                target[key] = arg[key];
            }
        });
    }
    return target;
};

module.exports = mergeConfigs(defaultConfig, configFileConfig, argsConfig);
