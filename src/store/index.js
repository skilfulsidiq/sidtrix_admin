import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import VuexPersistence from "vuex-persist";
import * as Cookies from "js-cookie";
import user from "./store_modules/user";

Vue.use(Vuex);

// const vuexCookie = new VuexPersistence({
//   restoreState: (key, storage) => Cookies.getJSON(key),
//   saveState: (key, state, storage) =>
//     Cookies.set(key, state, {
//       expires: 3
//     }),
//   modules: ["user"], //only save user module
//   filter: mutation => mutation.type == "logIn" || mutation.type == "logOut"
// });
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: state => ({ authmodule: state.authmodule }) //only save navigation module
  // filter: (mutation) => mutation.type == 'addNavItem'
});
export default new Vuex.Store({
  plugins: [
    createPersistedState({
      getState: key => Cookies.getJSON(key),
      setState: (key, state) =>
        Cookies.set(key, state, { expires: 3, secure: true })
    }),
    // vuexCookie.plugin,
    vuexLocal.plugin
  ],
  modules: {
    user
  }
});
