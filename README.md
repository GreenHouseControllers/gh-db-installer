# gh-db-installer
This module helps you to install the gh-db

## Usage

First make sure, that you have installed nodejs and npm.

Installing gh-db with this using module consist of 5 steps.

1. create base package.json, use:
   
        npm init
       
2. install gh-db-installer, use:

        npm i gh-db-installer
        
3. create file: install.js.

4. Put next code into install.js. You have to change port and dbToken to that you will use.

        const installer = require('gh-db-installer');
        
        const dbConfig = {
        	port: 3000,
        	dbToken: "trsv4zf2"
        }
        
        installer.install(__dirname, dbConfig);

5. Then run install.js, use:
        
        node install.js        
        
Then if you have got successful message - db has been installed.

You can remove node modules, install.js and package.json

Go to th gh-db, use:

    cd gh-db
    
Then you can run db, use:

    npm start    
    
You can change config parameters in ./config/config.json
        
        
