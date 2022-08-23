
import { createApp } from 'vue'
import App from './App.vue'
// 计算设置rem的基准值，即html的font-size
import 'amfe-flexible'
import { Button } from 'vant';


// import 'lib-flexible' //引入rem自适应

import 'vant/lib/index.css'
// import './util/vant'

const app = createApp(App);
app.use(Button).mount('#app');

