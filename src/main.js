import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Particles from 'vue3-particles'
import "@/assets/tailwind.css";

//createApp(App).use(store).use(router).mount('#app')

const app = createApp(App);

app.use(Particles);
app.use(store);
app.use(router);
app.mount('#website');