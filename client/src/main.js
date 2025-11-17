import { createApp } from 'vue'
import App from './App.vue'
import apolloClient from './graphql/client'
const app = createApp(App)
app.config.globalProperties.$apollo = apolloClient
app.mount('#app')
