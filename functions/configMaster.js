// add modules
const fs = require('fs');
const path = require('path');

const configMaster = (dbConfig) => {
    try {
// set db config file
        let writeConfig = JSON.stringify(dbConfig, null, 4);
        fs.writeFileSync(path.join(__dirname, '../app/gh-db/config/config.json'), writeConfig)
// successful message
        console.log('DD config has been set');

        return true;
    } catch (err) {
// fatal message with error
        console.log({
            message: "Can not set the config file",
            error: err
        });
        return false;
    }
}

module.exports = configMaster;