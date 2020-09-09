import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import '@/assets/reset.scss';

const app = createApp(App).use(router),
      el = '#app';

app.mount(el);

export {
  app,
  el
};
