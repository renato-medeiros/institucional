import Vue from 'vue';
import App from './App.vue';
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import router from './router';
import NowUiKit from './plugins/now-ui-kit';
import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'

Vue.config.productionTip = false;

Vue.use(NowUiKit, AmplifyPlugin, AmplifyModules);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
