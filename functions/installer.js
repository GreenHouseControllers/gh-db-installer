// add modules
const fs = require('fs-extra');
const path = require('path');

const installer = (rootPath) => {
    try{
// copy db form ../app to root path
        fs.copySync(path.join(__dirname, '../app'), rootPath);
        return true;
    } catch (err) {
// answer with error if fs-extra can not copy directory
        console.log({
            message: "Can not install gh-db",
            error: err
        });
        return false;
    }
}

module.exports = installer;