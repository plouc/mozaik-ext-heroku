var convict = require('convict');
var check   = require('validator').check;


var configurator = convict({
    heroku: {
        token: {
            doc:     'The heroku API token.',
            default: null,
            format:  String,
            env:    'HEROKU_API_TOKEN'
        }
    }
});

module.exports = configurator;