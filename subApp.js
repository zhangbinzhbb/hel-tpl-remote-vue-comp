const helDevUtils = require('hel-dev-utils');
const pkg = require('./package.json');

// deploy to unpkg
// const subApp = helDevUtils.createVue2SubApp(pkg, { npmCdnType: 'unpkg' });

// deploy to self deployed unpkg
// const subApp = helDevUtils.createVue2SubApp(pkg, { npmCdnType: 'unpkg', homePage: 'http://my-unpkg:8888' });

// deploy to git
const subApp = helDevUtils.createVue2SubApp(pkg, { homePage: 'https://zhangbinzhbb.github.io/hel-tpl-remote-vue-comp' });

// console.log("subApp===>",subApp)
// [ 
//     homePage: 'https://github.com/zhangbinzhbb/hel-tpl-remote-vue-comp/as_v1/v1.0.0',
//     groupName: 'hel-tpl-remote-vue-comps',
//     name: 'hel-tpl-remote-vue-comps',
//     externals: { vue: 'LEAH_Vue' },
//     getExternals: [Function: getExternals],
//     jsonpFnName: 'helJsonp_hel-tpl-remote-vue-comps_1676704164942',
//     getPublicPathOrUrl: [Function: getPublicPathOrUrl],
//     distDir: 'hel_dist' 
// ]

module.exports = subApp;
