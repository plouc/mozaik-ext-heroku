var Heroku = require('heroku-client');
var chalk  = require('chalk');
var config = require('./config');


/**
 * @param {Mozaik} context
 */
var client = function (context) {

    // load and validate config
    config.load(context.config.api);
    try {
        config.validate();
    } catch (e) {
        context.logger.error(chalk.red(e.message));
        process.exit(1);
    }

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