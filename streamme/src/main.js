import { createApp} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import imdbApi from './services/api'
import StreammeApi from './services/streammeApi'
import moment from "moment";
import emailjs from "emailjs-com";

const app = createApp(App);
app.use(moment).use(store).use(router).mount('#app');

app.config.globalProperties.$http = imdbApi;

app.config.globalProperties.$streammeApi = StreammeApi;

const global = app.config.globalProperties;

emailjs.init('1jdtafB3WTl1QZSD-');

export default global;
