const flow1Stage1Config = require('./fakePageConfigs/flow-1/stage-1');
const flow1Stage2Config = require('./fakePageConfigs/flow-1/stage-2');
const flow1Stage3Config = require('./fakePageConfigs/flow-1/stage-3');
const flow2Stage1Config = require('./fakePageConfigs/flow-2/stage-1');
const flow2Stage2Config = require('./fakePageConfigs/flow-2/stage-2');
const flow3Config = require('./fakePageConfigs/flow-3');
const homePageConfig = require('./fakePageConfigs/homePageConfig')
const merchantPageConfig = require('./fakePageConfigs/merchantPageConfig');
const campaignPageConfig = require('./fakePageConfigs/campaignPageConfig');

const gateWayEndpoints = {
  getMerchant: (id) => ({
    id,
    name: 'Merchant',
  }),
  getPageConfig: (path) => {
    switch(path) {
      case '/': return homePageConfig; break;
      case '/flow-1/stage-1': return flow1Stage1Config; break;
      case '/flow-1/stage-2': return flow1Stage2Config; break;
      case '/flow-1/stage-3': return flow1Stage3Config; break;
      case '/flow-2/stage-1': return flow2Stage1Config; break;
      case '/flow-2/stage-2': return flow2Stage2Config; break;
      case '/stage-0': return stage0Config; break;
      case '/seo': return flow3Config; break;
      case '/flow-3': return flow3Config; break;
      case '/merchant': return merchantPageConfig; break;
      case '/hello/campaign': return campaignPageConfig; break;
      default: return null;
    }
  },
  getBlockConfig: () => {
    
  },
  getLayoutConfig: () => {},
}

module.exports = gateWayEndpoints