/* eslint valid-jsdoc: "off" */
const code = require('./code.js')


/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.CODE = code;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1721195722122_5602';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

config.mongoose = {
  client: {
    url: 'mongodb://localhost:27017/todolist',
    options: {
      useUnifiedTopology: true,
    },
    // mongoose global plugins, expected a function or an array of function and options
    // plugins: [createdPlugin, [updatedPlugin, pluginOptions]],
  }

};
// EGG 安全配置
config.security = {
  csrf: {
    enable: false
  }
};
config.cors = {
  origin: '*',
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  credentials: true

}

  return {
    ...config,
    ...userConfig,
  };
};
