const helDevUtils = require('hel-dev-utils');
const pkg = require('./package.json');

// deploy to unpkg
// const subApp = helDevUtils.createVue2SubApp(pkg, { npmCdnType: 'unpkg' });

// deploy to self deployed unpkg
// const subApp = helDevUtils.createVue2SubApp(pkg, { npmCdnType: 'unpkg', homePage: 'http://my-unpkg:8888' });

// deploy to git
const subApp = helDevUtils.createVue2SubApp(pkg, { homePage: 'https://github.com/zhangbinzhbb/hel-tpl-remote-vue-comp/as_v1/v1.0.0' });

module.exports = subApp;
