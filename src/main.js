import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faClock, faFileLines, faUser, faCalendar, faEye } from '@fortawesome/free-regular-svg-icons'
import { faChevronDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faChevronDown, faTwitter, faFacebookF, faInstagram, faLinkedin, faClock, faFileLines, faUser, faArrowRight, faCalendar, faEye)

// import Swiper JS
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css/bundle';

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon, Swiper)
    .mount('#app')