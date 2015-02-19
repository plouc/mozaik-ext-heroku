var Heroku = require('heroku-client');
var chalk  = require('chalk');
var config = require('./config');


/**
 * @param {Mozaik} mozaik
 */
var client = function (mozaik) {

    mozaik.loadApiConfig(config);

    var heroku = new Heroku({
        token: config.get('heroku.token')
    });

    return {
        appInfo(params) {
            context.logger.info(chalk.yellow(`[heroku] fetching ${ params.app } app info`));

            return heroku.apps(params.app).info();
        }
    };
};

module.exports = client;