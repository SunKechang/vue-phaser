import { createApp } from 'vue'
import App from './App.vue'
import { defineCustomElements as defineIonPhaser } from '@ion-phaser/core/loader';

defineIonPhaser(window); // 加载ion-phaser组件到window对象中

createApp(App).mount('#app')
