const fs = require('fs');
const {CONFIG_FILE_NAME} = require("../projectConfig/projectConfig");

let config = {};

try {
    config = JSON.parse(
        fs.readFileSync(CONFIG_FILE_NAME)
    );
} catch (err) {
    if (err.code === 'ENOENT') {
    } else {
        throw err;
    }
}

module.exports = config;
