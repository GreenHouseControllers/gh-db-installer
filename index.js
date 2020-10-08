// add function modules
const configMaster = require('./functions/configMaster');
const installer = require('./functions/installer');
// add stop modules
const fatal = require('./stop/fatal');
const success = require('./stop/success');
// main export
exports.install = (rootPath, dbConfig) => {
// setting the config file
    if(configMaster(dbConfig) == false) fatal()
// installing db
    else if(installer(rootPath) == false) fatal()
// successful finish.
    else success();
}