var components = {
    AppInfo: require('./AppInfo.jsx')
};

require('mozaik/browser')
    .add('heroku.app_info', components.AppInfo)
;

module.exports = components;