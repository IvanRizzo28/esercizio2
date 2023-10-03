import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTrashCan, faPencil } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faTrashCan, faPencil)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

//axios
/*import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)*/

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
