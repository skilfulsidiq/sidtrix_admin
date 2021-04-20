import Vue from 'vue'



//layouts
import Frontend from '../views/layouts/Frontend.vue'
import Backend from '../views/layouts/Backend.vue'

import MyLoader from '../components/general/MyLoader.vue'
import Success from '../components/general/Success.vue'
import NavList from '../components/general/NavList.vue'
import AnalyticCard from '../components/general/AnalyticCard.vue'


Vue.component('frontend-layout', Frontend);
Vue.component('backend-layout', Backend);

// Vue.component('bottomnav', BottomNav);
// Vue.component('seperator', Seperator);
// Vue.component('page-title', PageTitle);
// Vue.component('paginated',Pagination);

Vue.component('my-loader', MyLoader);
Vue.component('success-card', Success);
Vue.component('analytic-card', AnalyticCard);
Vue.component('nav-list', NavList);



//component 
// Vue.component('listcard', ListCard);//ohome page
// Vue.component('by-location-card', ByLocationCard);//ohome page
// Vue.component('mylistingcard', MyListingCard);
// Vue.component('mycollectioncard', MyCollectionCard);
// Vue.component('property-list-card',PropertyListCard);