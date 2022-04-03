import { createApp} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import api from './services/api'
import moment from "moment";

const app = createApp(App);
app.use(moment).use(store).use(router).mount('#app');

app.config.globalProperties.$http = api;

const global = app.config.globalProperties;

export default global;
